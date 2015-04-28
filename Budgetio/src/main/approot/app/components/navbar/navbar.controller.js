'use strict';

angular.module('budgetio')
  .controller('NavbarCtrl', function ($scope, UserService) {

    $scope.$on('cache.item.updated', function(item) {
      console.log('itemChanges');
      if (item.key === 'categories') {
        $scope.statusCls = UserService.getBudgetStatus();
      }
    });
    $scope.statusCls = UserService.getBudgetStatus();
    $scope.date = new Date();
  });
