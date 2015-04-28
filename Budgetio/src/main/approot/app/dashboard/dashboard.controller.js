'use strict';

angular.module('budgetio')
  .controller('DashboardCtrl', function ($scope, $state, UserService) {

    UserService.getBalance(function(balance) {
      $scope.user = {
        budget: balance
      };
    });

    UserService.getTransactions(function(transactions) {
      console.log(transactions);
      $scope.transactions = transactions;
    });

    $scope.$on('cache.item.updated', function(item) {
      if (item.key === 'categories') {
        $scope.categories = item.newValue;
      }
    });

    $scope.categories = UserService.getCategories();

    $scope.ginify = function() {
      $state.go('ginifier');
    };
  });
