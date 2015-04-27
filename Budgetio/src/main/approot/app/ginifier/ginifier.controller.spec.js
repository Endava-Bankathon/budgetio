'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('budgetio'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

});
