'use strict';

angular.module('budgetio').
  service('UserService', function ($resource, CategoryService, NotifyingCache) {
    this.user = { };
    this.transactions = [];

    this.categories = [
      {
        title: 'Food',
        code: 'F',
        amount: 0,
        options: {
          max: 4500,
          fgColor: '#f68e56',
          thickness: 0.3,
          skin: 'tron',
          width: 200,
          displayPrevious: true
        }
      }, {
        title: 'Household',
        code: 'H',
        amount: 0,
        options: {
          max: 8000,
          fgColor: '#4a668d',
          thickness: 0.3,
          skin: 'tron',
          width: 200,
          displayPrevious: true
        }
      }, {
        title: 'Holiday',
        code: 'V',
        amount: 0,
        options: {
          max: 4500,
          fgColor: '#fc3589',
          thickness: 0.3,
          skin: 'tron',
          width: 200,
          displayPrevious: true
        }
      }, {
        title: 'Misc',
        code: 'M',
        amount: 0,
        options: {
          max: 4500,
          fgColor: '#b56ef5',
          thickness: 0.3,
          skin: 'tron',
          width: 200,
          displayPrevious: true
        }
      }, {
        title: 'Transportation',
        code: 'T',
        amount: 0,
        options: {
          max: 8000,
          fgColor: '#f64730',
          thickness: 0.3,
          skin: 'tron',
          width: 200,
          displayPrevious: true
        }
      }, {
        title: 'Cash',
        code: 'C',
        amount: 0,
        options: {
          max: 8000,
          fgColor: '#18ac81',
          thickness: 0.3,
          skin: 'tron',
          width: 200,
          displayPrevious: true
        }
      }
    ];

    this.setMaxForCategory = function(categoryCode, maxValue) {
      this.categories.map(function(category) {
        if (category.code === categoryCode) {
          category.options.max = maxValue;
        }
      });
    };

    this.adjustCategory = function(categoryCode, amount) {
      this.categories.map(function(category) {
        console.log(category.code + '-' + amount);
        if (category.code === categoryCode) {
          category.amount += Math.abs(amount);
        }
      });

    };

    this.getBalance = function(callback) {
      if (this.user.budget) {
        callback(this.user.budget);
        return;
      }

      var me = this;
      var usr = $resource('rest/getAccounts');
      usr.query(function(accounts) {
        var balance = 0;
        accounts.map(function(account) {
          balance += account.balance.balance;
        });
        me.user = {
          budget: balance
        };
        callback(balance);
      });
    };

    this.getTransactions = function(callback) {
      if (this.transactions && this.transactions.length > 0) {
        callback(this.transactions);
        return;
      }
      var me = this;
      var trans = $resource('rest/getTransactions');
      trans.query(function(transactions) {
        me.transactions = transactions.map(function(transaction) {
          transaction.time = moment(transaction.bookingDate).format('L');
          transaction.currency = CategoryService.convertCurrency(transaction.currency);
          transaction.category = CategoryService.getTransactionCategory(transaction.name);
          transaction.categoryClass = CategoryService.getCategoryClass(transaction.name);
          me.adjustCategory(transaction.category, transaction.amount);
          return transaction;
        });
        NotifyingCache.put('categories', me.categories);
        callback(me.transactions);
      });
    };

    this.getCategories = function() {
      return this.categories;
    };

  });
