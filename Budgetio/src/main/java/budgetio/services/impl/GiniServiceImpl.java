package budgetio.services.impl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.ResourceBundle;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Form;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedHashMap;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.Response;

import org.apache.commons.lang.StringUtils;
import org.apache.cxf.jaxrs.ext.multipart.Attachment;
import org.glassfish.jersey.client.authentication.HttpAuthenticationFeature;
import org.springframework.stereotype.Service;

import budgetio.services.GiniService;

/**
 * The GiniService.java. This service is meant to act as a wrapper over the the Gini API.
 *
 * @author Dragos Dobromir
 */
@Service("giniServiceImpl")
public class GiniServiceImpl implements GiniService {

    private static final ResourceBundle BUNDLE = ResourceBundle.getBundle("resourceBundle");

    private static final String CLIENT_ID = "gini.client.id";
    private static final String CLIENT_SECRET = "gini.client.secret";
    private static final String USER_NAME = "gini.user.name";
    private static final String USER_PASSWORD = "gini.user.password";
    private static final String USER_ID = "gini.user.id";
    private static final String USER_SECRET = "gini.user.secret";

    private static final String PATTERN_USER_TOKEN = "gini.pattern.user.token";
    private static final String PATTERN_CLIENT_TOKEN = "gini.pattern.client.token";
    private static final String PATTERN_DOCUMENT_ID = "gini.pattern.document.id";
    private static final String PATTERN_PROGRESS_COMPLETED = "gini.pattern.progress.completed";

    private static final String URL_CLIENT_TOKEN = "gini.url.client.token";
    private static final String URL_USER_TOKEN = "gini.url.user.token";
    private static final String URL_DOCUMENT_CREATE = "gini.url.document.create";
    private static final String URL_DOCUMENT_STATUS = "gini.url.document.status";
    private static final String URL_DOCUMENT_EXTRACTIONS = "gini.url.document.extractions";

    private static final String HEADER_ACCEPT = "gini.header.accept";
    private static final String HEADER_AUTHORIZATION_BEARER = "gini.header.authorization.bearer";

    public static void main(final String... args) throws FileNotFoundException {

        //Creating dummy attachments from existing folder on disk
        final FileInputStream localFile = new FileInputStream(new File("D:/file.pdf"));
        final MultivaluedMap<String, String> headers = new MultivaluedHashMap<String, String>();
        final List<Attachment> attachments = new ArrayList<Attachment>();
        final Attachment attachment = new Attachment(localFile, headers);
        attachments.add(attachment);

        final GiniServiceImpl gini = new GiniServiceImpl();
        final Response response = gini.decodeDocument(attachments);
        System.out.println(response.readEntity(String.class));


    }

    /**
     * Method for uploading the document to the Gini API.
     */
    @Override
    public String createDocument(final List<Attachment> attachments) {
        String documentId = null;
        try {
            Response serviceResponse = null;
            final Client client = ClientBuilder.newBuilder().build();
            final WebTarget target = client.target(BUNDLE.getString(URL_DOCUMENT_CREATE));
            final String authorizationBearer =
                MessageFormat.format(BUNDLE.getString(HEADER_AUTHORIZATION_BEARER), new Object[] {
                    getUserToken()
                });

            serviceResponse =
                target.request(BUNDLE.getString(HEADER_ACCEPT)).header(HttpHeaders.AUTHORIZATION, authorizationBearer).post(
                    Entity.entity(
                        attachments.get(0).getDataHandler().getInputStream(), MediaType.APPLICATION_OCTET_STREAM_TYPE),
                    Response.class);

            final Pattern docIdPattern = Pattern.compile(BUNDLE.getString(PATTERN_DOCUMENT_ID));
            final Matcher docIdMatcher = docIdPattern.matcher(serviceResponse.getHeaderString(HttpHeaders.LOCATION));
            if (docIdMatcher.find()) {
                documentId = docIdMatcher.group(1);
            }
            System.out.println("Created document ID: " + documentId);
        } catch (final Exception e) {
            e.printStackTrace();
        }
        return documentId;
    }

    /**
     * Method for obtaining the document status after upload.
     */
    @Override
    public Response pollDocument(final String documentId) {
        final Client client = ClientBuilder.newBuilder().build();
        final String docStatusURL = MessageFormat.format(BUNDLE.getString(URL_DOCUMENT_STATUS), new Object[] {
            documentId
        });
        final String authorizationBearer =
            MessageFormat.format(BUNDLE.getString(HEADER_AUTHORIZATION_BEARER), new Object[] {
                getUserToken()
            });
        final WebTarget target = client.target(docStatusURL);
        final Response documentStatus =
            target.request(BUNDLE.getString(HEADER_ACCEPT)).header(HttpHeaders.AUTHORIZATION, authorizationBearer).get(
                Response.class);
        return documentStatus;
    }

    /**
     * Method for from obtaining the document extractions for a document that has been uploaded and processed by the
     * Gini API.
     */
    @Override
    public Response getDocumentExtractions(final String documentId) {
        final Client client = ClientBuilder.newBuilder().build();
        final String docExtractionsURL = MessageFormat.format(BUNDLE.getString(URL_DOCUMENT_EXTRACTIONS), new Object[] {
            documentId
        });
        final String authorizationBearer =
            MessageFormat.format(BUNDLE.getString(HEADER_AUTHORIZATION_BEARER), new Object[] {
                getUserToken()
            });
        final WebTarget target = client.target(docExtractionsURL);
        final Response serviceResponse =
            target.request(BUNDLE.getString(HEADER_ACCEPT)).header(HttpHeaders.AUTHORIZATION, authorizationBearer).get(
                Response.class);
        return serviceResponse;
    }

    /**
     * Method for decoding a document using the Gini API. All the magic happens here.
     */
    @Override
    public Response decodeDocument(final List<Attachment> attachments) {
        Response extractions = null;
        final String documentId = createDocument(attachments);
        if (StringUtils.isNotEmpty(documentId)) {
            boolean docReady = false;
            String pollResponse = null;
            while (!docReady) {
                pollResponse = pollDocument(documentId).readEntity(String.class);
                System.out.println("Poll document response: " + pollResponse);
                if (pollResponse.contains(BUNDLE.getString(PATTERN_PROGRESS_COMPLETED))) {
                    System.out.println("Document processed successfully");
                    docReady = true;
                } else {
                    System.out.println("Document not processed yet - Waiting");
                }
            }
            extractions = getDocumentExtractions(documentId);
        }
        return extractions;
    }

    /**
     * Method for obtaining the Gini user token.
     */
    private String getClientToken() {
        String clientToken = null;
        final Client client = ClientBuilder.newBuilder().build();
        client.register(HttpAuthenticationFeature.basic(BUNDLE.getString(CLIENT_ID), BUNDLE.getString(CLIENT_SECRET)));
        final WebTarget target = client.target(BUNDLE.getString(URL_CLIENT_TOKEN));
        final Response serviceResponse = target.request(MediaType.APPLICATION_JSON_TYPE).get(Response.class);
        final String jsonContent = serviceResponse.readEntity(String.class);
        final Pattern tokenPatern = Pattern.compile(BUNDLE.getString(PATTERN_CLIENT_TOKEN));
        final Matcher tokenMatcher = tokenPatern.matcher(jsonContent);
        if (tokenMatcher.find()) {
            clientToken = tokenMatcher.group(1);
        }
        System.out.println("Client token response: " + jsonContent);
        return clientToken;
    }

    /**
     * Method for obtaining the Gini user token.
     */
    private String getUserToken() {
        String userToken = null;
        final Client client = ClientBuilder.newBuilder().build();
        client.register(HttpAuthenticationFeature.basic(BUNDLE.getString(CLIENT_ID), BUNDLE.getString(CLIENT_SECRET)));
        final WebTarget target = client.target(BUNDLE.getString(URL_USER_TOKEN));

        final Form form = new Form();
        form.param(BUNDLE.getString(USER_NAME), BUNDLE.getString(USER_ID));
        form.param(BUNDLE.getString(USER_PASSWORD), BUNDLE.getString(USER_SECRET));

        final Response serviceResponse =
            target.request(MediaType.APPLICATION_JSON_TYPE).post(
                Entity.entity(form, MediaType.APPLICATION_FORM_URLENCODED_TYPE), Response.class);
        final String jsonContent = serviceResponse.readEntity(String.class);
        final Pattern tokenPatern = Pattern.compile(BUNDLE.getString(PATTERN_USER_TOKEN));
        final Matcher tokenMatcher = tokenPatern.matcher(jsonContent);
        if (tokenMatcher.find()) {
            userToken = tokenMatcher.group(1);
        }
        System.out.println("User token response: " + jsonContent);
        return userToken;
    }
}
