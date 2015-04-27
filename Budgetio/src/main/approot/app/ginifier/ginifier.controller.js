'use strict';

angular.module('budgetio')
  .controller('GinifierCtrl', function ($scope, $modalInstance) {

    $scope.ok = function () {
      $modalInstance.close($scope.selected);
    };
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
