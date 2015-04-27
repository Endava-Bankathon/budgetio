'use strict';

angular.module('budgetio')
  .controller('GinifierCtrl', function ($scope, $modalInstance, items) {

    $scope.ok = function () {
      $modalInstance.close($scope.selected);
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
