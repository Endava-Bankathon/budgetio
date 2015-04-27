package budgetio.services.impl;

import java.util.List;

import javax.ws.rs.core.Response;

import org.apache.cxf.jaxrs.ext.multipart.Attachment;
import org.springframework.stereotype.Service;

import budgetio.services.GiniService;

/**
 * The GiniService.java. This service is meant to act as a wrapper over the the Gini API.
 *
 * @author Dragos Dobromir
 */
@Service("giniServiceImpl")
public class GiniServiceImpl implements GiniService {

    @Override
    public String createDocument(final List<Attachment> attachments) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Response pollDocument(final String documentId) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Response getDocumentExtractions(final String documentId) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Response decodeDocument(final List<Attachment> attachments) {
        // TODO Auto-generated method stub
        return null;
    }


}
