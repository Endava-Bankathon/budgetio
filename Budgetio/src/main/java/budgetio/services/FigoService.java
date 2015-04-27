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
  @Path("/getAccount/{accountId}")
  @Produces(MediaType.APPLICATION_JSON)
  public Account getAccount(@PathParam("accountId") String accountId);

  @GET
  @Path("/getAccounts")
  @Produces(MediaType.APPLICATION_JSON)
  public List<Account> getAccounts();

  @GET
  @Path("/getAccountBalance/{accountId}")
  @Produces(MediaType.APPLICATION_JSON)
  public AccountBalance getAccountBalance(@PathParam("accountId") String accountId);

  @GET
  @Path("/getTransaction/{accountId}/{transactionId}")
  @Produces(MediaType.APPLICATION_JSON)
  public Transaction getTransaction(
    @PathParam("accountId") String accountId, @PathParam("transactionId") String transactionId);

  @GET
  @Path("/getTransactions/{accountId}")
  @Produces(MediaType.APPLICATION_JSON)
  public List<Transaction> getTransactions(@PathParam("accountId") String accountId);

  @GET
  @Path("/getTransactions")
  @Produces(MediaType.APPLICATION_JSON)
  public List<Transaction> getTransactions();

  @GET
  @Path("/getBank/{bankId}")
  @Produces(MediaType.APPLICATION_JSON)
  public Bank getBank(@PathParam("bankId") String bankId);

  @GET
  @Path("/getNotification/{notificationId}")
  @Produces(MediaType.APPLICATION_JSON)
  public Notification getNotification(@PathParam("notificationId") String notificationId);

  @GET
  @Path("/getNotifications")
  @Produces(MediaType.APPLICATION_JSON)
  public List<Notification> getNotifications();

  @GET
  @Path("/getPayment/{accountId}/{paymentId}")
  @Produces(MediaType.APPLICATION_JSON)
  public Payment getPayment(@PathParam("accountId") String accountId, @PathParam("paymentId") String paymentId);

  @GET
  @Path("/getPayments/{accountId}")
  @Produces(MediaType.APPLICATION_JSON)
  public List<Payment> getPayments(@PathParam("accountId") String accountId);

  @GET
  @Path("/getPayments")
  @Produces(MediaType.APPLICATION_JSON)
  public List<Payment> getPayments();

  @GET
  @Path("/getPaymentProposals")
  @Produces(MediaType.APPLICATION_JSON)
  public List<PaymentProposal> getPaymentProposals();

  @GET
  @Path("/getSupportedServices/{countryCode}")
  @Produces(MediaType.APPLICATION_JSON)
  public List<Service> getSupportedServices(@PathParam("countryCode") String countryCode);

  @GET
  @Path("/getSecurity/{accountId}/{securityId}")
  @Produces(MediaType.APPLICATION_JSON)
  public Security getSecurity(String accountId, String securityId);

  @GET
  @Path("/getSecurities/{accountId}")
  @Produces(MediaType.APPLICATION_JSON)
  public List<Security> getSecurities(String accountId);

  @GET
  @Path("/getSecurities")
  @Produces(MediaType.APPLICATION_JSON)
  public List<Security> getSecurities();

}
