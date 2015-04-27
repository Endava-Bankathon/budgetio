'use strict';

angular.module('budgetio', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngFileUpload', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'WelcomeCtrl'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .state('ginifier', {
        url: '/ginifier',
        onEnter: ['$stateParams', '$state', '$modal', '$resource', function($stateParams, $state, $modal, $resource) {
          $modal.open({
            size: 'lg',
            templateUrl: 'app/ginifier/ginifier.html',
            controller: 'GinifierCtrl'
          }).result.finally(function() {
            $state.go('dashboard');
          });
        }]
      });
    $urlRouterProvider.otherwise('/');
  })
;
