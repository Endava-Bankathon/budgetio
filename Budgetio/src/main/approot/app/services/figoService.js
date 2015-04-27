'use strict';
/*
 * Figo API wrapper service.
 */
(function () {
  var figoService = function ($http) {
    /*
     * Function that calls the getUser REST service.
     */
    var getUser = function () {
      var serviceUrl = 'http://localhost:8080/rest/getUser';
      return $http.get(serviceUrl)
        .success(function (data) {
          if (console) {
            console.info('getUser response: ', data);
          }

          return data;
        })
        .error(function (data, status) {
          if (console) {
            console.error('getUser request failed with status: ', status, data);
          }

        });
    };

    /*
     * Function that calls the getAccounts REST service.
     */
    var getAccounts = function () {
      var serviceUrl = 'http://localhost:8080/rest/getAccounts';
      return $http.get(serviceUrl)
        .success(function (data) {
          if (console) {
            console.info('getAccounts result: ', data);
          }
          return data;
        })
        .error(function (data, status) {
          if (console) {
            console.error('getAccounts request failed with status: ', status, data);
          }
        });
    };

    /*
     * Function that calls the getTransactions REST service.
     */
    var getTransactions = function () {
      var serviceUrl = 'http://localhost:8080/rest/getTransactions';
      return $http.get(serviceUrl)
        .success(function (data) {
          if (console) {
            console.info('getTransactions result: ', data);
          }

          return data;
        })
        .error(function (data, status) {
          if (console) {
            console.error('getTransactions request failed with status: ', status, data);
          }
        });
    };

    /*
     * Function that calls the getNotifications REST service.
     */
    var getNotifications = function () {
      var serviceUrl = 'http://localhost:8080/rest/getNotifications';
      return $http.get(serviceUrl)
        .success(function (data) {
          if (console) {
            console.info('getNotifications result: ', data);
          }
          return data;
        })
        .error(function (data, status) {
          if (console) {
            console.error('getNotifications request failed with status: ', status, data);
          }
        });
    };

    /*
     * Function that calls the getNotifications REST service.
     */
    var getPayments = function () {
      var serviceUrl = 'http://localhost:8080/rest/getPayments';
      return $http.get(serviceUrl)
        .success(function (data) {
          if (console) {
            console.info('getPayments result: ', data);
          }
          return data;
        })
        .error(function (data, status) {
          if (console) {
            console.error('getPayments request failed with status: ', status, data);
          }
        });
    };


    return {
      getUser: getUser,
      getAccounts: getAccounts,
      getTransactions: getTransactions,
      getNotifications: getNotifications,
      getPayments: getPayments
    };

  };

  var module = angular.module('budgetio');
  module.factory('figoService', figoService);
}());
