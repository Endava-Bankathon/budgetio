'use strict';

angular.module('budgetio', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
          }
	      )
      .state('ginifier', {
        url: '/ginifier',
        templateUrl: 'app/ginifier/ginifier.html',
        controller: 'GinifierCtrl'
        }
      );
    $urlRouterProvider.otherwise('/');
  })
;
