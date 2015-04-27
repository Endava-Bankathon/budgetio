'use strict';

angular.module('budgetio')
  .controller('DashboardCtrl', function ($scope, $state, $resource) {

    var usr = $resource('rest/getAccounts');
    usr.query(function(accounts) {
      var balance = 0;
      accounts.each(function(account) {
        balance += account.balance.balance;
      });
      $scope.user = {
        budget: balance
      };
    });

    var transactions = $resource('rest/getTransactions');
    transactions.query(function(transactions) {
      $scope.transactions = transactions.map(function(transaction) {
        transaction.time = moment(transaction.bookingDate).format('L');
        transaction.category = transaction.name.startsWith('D') ? 'C' : 'F';
        return transaction;
      });
    });

    $scope.categories = [
      {
        title: 'Food',
        amount: 1000,
        options: {
          max: 4500,
          fgColor: '#f68e56',
          thickness: 0.3,
          skin: 'tron',
          width: 200,
          displayPrevious: true
        }
      }, {
        title: 'Misc',
        amount: 1000,
        options: {
          max: 4500,
          fgColor: '#b56ef5',
          thickness: 0.3,
          skin: 'tron',
          width: 200,
          displayPrevious: true
        }
      }, {
        title: 'Holiday',
        amount: 1000,
        options: {
          max: 4500,
          fgColor: '#fc3589',
          thickness: 0.3,
          skin: 'tron',
          width: 200,
          displayPrevious: true
        }
      }, {
        title: 'Household',
        amount: 1500,
        options: {
          max: 4500,
          fgColor: '#4a668d',
          thickness: 0.3,
          skin: 'tron',
          width: 200,
          displayPrevious: true
        }
      }, {
        title: 'Transportation',
        amount: 1000,
        options: {
          max: 4500,
          fgColor: '#f64730',
          thickness: 0.3,
          skin: 'tron',
          width: 200,
          displayPrevious: true
        }
      }, {
        title: 'Cash',
        amount: 1000,
        options: {
          max: 4500,
          fgColor: '#18ac81',
          thickness: 0.3,
          skin: 'tron',
          width: 200,
          displayPrevious: true
        }
      }
    ];

    $scope.ginify = function() {
      $state.go('ginifier');
    }
  });
