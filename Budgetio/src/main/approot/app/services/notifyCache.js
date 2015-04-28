'use strict';

angular.module('budgetio')
  .service('NotifyingCache', ['$rootScope',  function($rootScope){

  var cache = {};

  this.put = function(key, value){
    var oldValue = this.get(key);
    cache[key] = value;
    $rootScope.$broadcast(
      'cache.item.updated',
      { key: key, newValue: value, oldValue: oldValue });
  };

  this.remove = function(key){
    var value = this.get(key);
    delete cache[key];
    $rootScope.$broadcast(
      'cache.item.removed', { key: key, value: value });
  };

  this.get = function(key){
    return cache[key] || null;
  };
}]);
