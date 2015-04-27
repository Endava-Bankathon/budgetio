'use strict';

angular.module('budgetio', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'angularFileUpload'])
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
        onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
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
