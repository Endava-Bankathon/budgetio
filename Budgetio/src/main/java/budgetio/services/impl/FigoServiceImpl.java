package budgetio.services.impl;

import java.util.List;
import java.util.ResourceBundle;

import me.figo.FigoSession;
import me.figo.models.Account;
import me.figo.models.AccountBalance;
import me.figo.models.Bank;
import me.figo.models.Notification;
import me.figo.models.Payment;
import me.figo.models.PaymentProposal;
import me.figo.models.Security;
import me.figo.models.Transaction;
import me.figo.models.User;

import org.springframework.stereotype.Service;

import budgetio.services.FigoService;

/**
 * The FigoServiceImpl.java. This service is meant to act as a wrapper over the FigoSession.java from the Figo API SDK.
 *
 * @author Dragos Dobromir
 */
@Service("figoServiceImpl")
public class FigoServiceImpl implements FigoService {

  /** The Constant BUNDLE. */
  private static final ResourceBundle BUNDLE = ResourceBundle.getBundle("resourceBundle");

  private static final String ACCESS_TOKEN = "figo.access.token";

  /** Sample Figo session from the Figo SDK. */
  private static final FigoSession figoSession = new FigoSession(BUNDLE.getString(ACCESS_TOKEN));

  public static void main(final String... args) {
    final FigoServiceImpl figo = new FigoServiceImpl();
    final User user = figo.getUser();
    System.out.println("User: " + user);

    final List<Transaction> transactions = figo.getTransactions();
    System.out.println("Transactions: " + transactions);

    final List<Account> accounts = figo.getAccounts();
    System.out.println("Account: " + accounts);

    final List<Notification> notifications = figo.getNotifications();
    System.out.println("Notifications: " + notifications);

    final List<Payment> payments = figo.getPayments();
    System.out.println("Payments: " + payments);

//        final List<PaymentProposal> paymentProposals = figo.getPaymentProposals();
//        System.out.println("Payment Proposals: " + paymentProposals);

//        final List<Security> securities = figo.getSecurities();
//        System.out.println("Securities: " + securities);
  }

  @Override
  public User getUser() {
    User response = null;
    try {
      response = FigoServiceImpl.figoSession.getUser();
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public Account getAccount(final String accountId) {
    Account response = null;
    try {
      response = FigoServiceImpl.figoSession.getAccount(accountId);
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public List<Account> getAccounts() {
    List<Account> response = null;
    try {
      response = FigoServiceImpl.figoSession.getAccounts();
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public AccountBalance getAccountBalance(final String accountId) {
    AccountBalance response = null;
    try {
      response = FigoServiceImpl.figoSession.getAccountBalance(accountId);
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public Transaction getTransaction(final String accountId, final String transactionId) {
    Transaction response = null;
    try {
      response = FigoServiceImpl.figoSession.getTransaction(accountId, transactionId);
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public List<Transaction> getTransactions(final String accountId) {
    List<Transaction> response = null;
    try {
      response = FigoServiceImpl.figoSession.getTransactions(accountId);
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public List<Transaction> getTransactions() {
    List<Transaction> response = null;
    try {
      response = FigoServiceImpl.figoSession.getTransactions();
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public Bank getBank(final String bankId) {
    Bank response = null;
    try {
      response = FigoServiceImpl.figoSession.getBank(bankId);
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public Notification getNotification(final String notificationId) {
    Notification response = null;
    try {
      response = FigoServiceImpl.figoSession.getNotification(notificationId);
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public List<Notification> getNotifications() {
    List<Notification> response = null;
    try {
      response = FigoServiceImpl.figoSession.getNotifications();
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public Payment getPayment(final String accountId, final String paymentId) {
    Payment response = null;
    try {
      response = FigoServiceImpl.figoSession.getPayment(accountId, paymentId);
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public List<Payment> getPayments(final String accountId) {
    List<Payment> response = null;
    try {
      response = FigoServiceImpl.figoSession.getPayments(accountId);
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public List<Payment> getPayments() {
    List<Payment> response = null;
    try {
      response = FigoServiceImpl.figoSession.getPayments();
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public List<PaymentProposal> getPaymentProposals() {
    List<PaymentProposal> response = null;
    try {
      response = FigoServiceImpl.figoSession.getPaymentProposals();
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public List<me.figo.models.Service> getSupportedServices(final String countryCode) {
    List<me.figo.models.Service> response = null;
    try {
      response = FigoServiceImpl.figoSession.getSupportedServices(countryCode);
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public Security getSecurity(final String accountId, final String securityId) {
    Security response = null;
    try {
      response = FigoServiceImpl.figoSession.getSecurity(accountId, securityId);
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public List<Security> getSecurities(final String accountId) {
    List<Security> response = null;
    try {
      response = FigoServiceImpl.figoSession.getSecurities(accountId);
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }

  @Override
  public List<Security> getSecurities() {
    List<Security> response = null;
    try {
      response = FigoServiceImpl.figoSession.getSecurities();
    } catch (final Exception e) {
      e.printStackTrace();
    }
    return response;
  }
}
