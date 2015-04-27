package budgetio.services;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import me.figo.models.Account;
import me.figo.models.AccountBalance;
import me.figo.models.Bank;
import me.figo.models.Notification;
import me.figo.models.Payment;
import me.figo.models.PaymentProposal;
import me.figo.models.Security;
import me.figo.models.Service;
import me.figo.models.Transaction;
import me.figo.models.User;

/**
 * The FigoService.java. This service is meant to act as a wrapper over the FigoSession.java from the Figo API SDK.
 *
 * @author Dragos Dobromir
 */
public interface FigoService {

    @GET
    @Path("/getUser")
    @Produces(MediaType.APPLICATION_JSON)
    public User getUser();    

    @GET
    @Path("/getAccounts")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Account> getAccounts();    

    @GET
    @Path("/getTransactions")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Transaction> getTransactions();
	
    @GET
    @Path("/getNotifications")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Notification> getNotifications();    

    @GET
    @Path("/getPayments")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Payment> getPayments();

    @GET
    @Path("/getPaymentProposals")
    @Produces(MediaType.APPLICATION_JSON)
    public List<PaymentProposal> getPaymentProposals();    

    @GET
    @Path("/getSecurities")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Security> getSecurities();

}
