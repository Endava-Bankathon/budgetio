package budgetio.services.impl;

import java.util.List;

import me.figo.models.Account;
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

    @Override
    public User getUser() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<Account> getAccounts() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<Transaction> getTransactions() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<Notification> getNotifications() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<Payment> getPayments() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<PaymentProposal> getPaymentProposals() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<Security> getSecurities() {
        // TODO Auto-generated method stub
        return null;
    }


}
