'use strict';

angular.module('budgetio')
  .controller('DashboardCtrl', function ($scope, $state) {
    $scope.user = {
      budget: 2333.00
    };
    $scope.transactions = [
      {
        type: 'F',
        currency: '€',
        amount: '50',
        location: 'SuperMarket Cora Super long title of the shop',
        time: '14.04.2015'
      }, {
        type: 'F',
        currency: '€',
        amount: '50',
        location: 'SuperMarket Cora Super long title of the shop',
        time: '14.04.2015'
      }, {
        type: 'F',
        currency: '€',
        amount: '50',
        location: 'SuperMarket Cora Super long title of the shop',
        time: '14.04.2015'
      }, {
        type: 'F',
        currency: '€',
        amount: '50',
        location: 'SuperMarket Cora Super long title of the shop',
        time: '14.04.2015'
      }, {
        type: 'F',
        currency: '€',
        amount: '50',
        location: 'SuperMarket Cora Super long title of the shop',
        time: '14.04.2015'
      }
    ];

    $scope.categories = [
      {
        title: 'Food',
        amount: 1000,
        options: {
          max: 4500,
          fgColor: '#f68e56',
          thickness: .3,
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
          thickness: .3,
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
          thickness: .3,
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
          thickness: .3,
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
          thickness: .3,
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
          thickness: .3,
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
