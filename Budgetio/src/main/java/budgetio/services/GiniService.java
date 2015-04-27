package budgetio.services;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.cxf.jaxrs.ext.multipart.Attachment;

/**
 * The GiniService.java. This service is meant to act as a wrapper over the the Gini API.
 *
 * @author Dragos Dobromir
 */
public interface GiniService {

    @POST
    @Path("/createDocument")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.TEXT_PLAIN)
    public String createDocument(final List<Attachment> attachments);

    @GET
    @Path("/pollDocument/{documentId}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response pollDocument(@PathParam("documentId") String documentId);

    @GET
    @Path("/getDocumentExtractions/{documentId}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDocumentExtractions(@PathParam("documentId") String documentId);

    @GET
    @Path("/getDocumentLayout/{documentId}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDocumentLayout(@PathParam("documentId") String documentId);

    @POST
    @Path("/decodeDocument")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    @Produces(MediaType.APPLICATION_JSON)
    public Response decodeDocument(final List<Attachment> attachments);

}
