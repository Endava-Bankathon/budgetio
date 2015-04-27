'use strict';

angular.module('budgetio')
  .controller('DashboardCtrl', function ($scope, $state, $resource) {

    var usr = $resource('rest/getAccounts');
    usr.query(function(accounts) {
      var balance = 0;
      accounts.map(function(account) {
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
        transaction.currency = $scope.convertCurrency(transaction.currency);
        transaction.category = $scope.getTransactionCategory(transaction.name);
        transaction.categoryClass = $scope.getCategoryClass(transaction.name);
        return transaction;
      });
    });

    $scope.convertCurrency = function(currencyCode) {
      switch(currencyCode) {
        case 'EUR':
              return '€';
        case 'USD':
              return '$';
        default:
              return '€'
      }
    };
    $scope.getCategoryClass = function(name) {
      switch($scope.getTransactionCategory(name)) {
        case 'M': {
          return 'misc';
        }
        case 'T': {
          return 'transportation';
        }
        case 'H':{
          return 'house';
        }
        case 'C':{
          return 'cash';
        }
        case 'F':{
          return 'food';
        }
        case 'V': {
          return 'holiday';
        }
      }
      return 'food';
    };

    $scope.getTransactionCategory =  function(name) {
      var category = "M";
      if ( name.indexOf("Airfreu") > -1 ) { category = "T"; }
      if ( name.indexOf("Amazing Services Europe") > -1 ) { category = "T"; }
      if ( name.indexOf("Apple") > -1 ) { category = "H"; }
      if ( name.indexOf("Deli") > -1 ) { category = "F"; }
      if ( name.indexOf("Verkehr") > -1 ) { category = "T"; }
      if ( name.indexOf("supermarkt") > -1 ) { category = "F"; }
      if ( name.indexOf("Bitstream") > -1 ) { category = "H"; }
      if ( name.indexOf("Butter Lindner") > -1 ) { category = "F"; }
      if ( name.indexOf("Call A Bike") > -1 ) { category = "T"; }
      if ( name.indexOf("Dr. House Solutions Gmbh") > -1 ) { category = "H"; }
      if ( name.indexOf("Feinkost") > -1 ) { category = "F"; }
      if ( name.indexOf("Fidibus") > -1 ) { category = "H"; }
      if ( name.indexOf("Giro") > -1 ) { category = "C"; }
      if ( name.indexOf("Brot") > -1 ) { category = "F"; }
      if ( name.indexOf("Supermarkt") > -1 ) { category = "F"; }
      if ( name.indexOf("Lichtblick") > -1 ) { category = "H"; }
      if ( name.indexOf("Luigi") > -1 ) { category = "F"; }
      if ( name.indexOf("Ferien") > -1 ) { category = "V"; }
      if ( name.indexOf("Rundfunkgebühren Ard/Zdf") > -1 ) { category = "H"; }
      if ( name.indexOf("Schnitzelei") > -1 ) { category = "F"; }
      return category;
    };
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
