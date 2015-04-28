'use strict';

angular.module('budgetio').
  service('CategoryService', function () {
    this.getCategoryClass = function(name) {
      switch(this.getTransactionCategory(name)) {
        case 'M': {
          return 'misc';
        }
        case 'T': {
          return 'transportation';
        }
        case 'H':{
          return 'house';
        }
        case 'C':{
          return 'cash';
        }
        case 'F':{
          return 'food';
        }
        case 'V': {
          return 'holiday';
        }
      }
      return 'food';
    };

    this.getTransactionCategory = function(name) {
      var category = 'M';
      if ( name.indexOf('Airfreu') > -1 ) { category = 'T'; }
      if ( name.indexOf('Amazing Services Europe') > -1 ) { category = 'T'; }
      if ( name.indexOf('Apple') > -1 ) { category = 'H'; }
      if ( name.indexOf('Deli') > -1 ) { category = 'F'; }
      if ( name.indexOf('Verkehr') > -1 ) { category = 'T'; }
      if ( name.indexOf('supermarkt') > -1 ) { category = 'F'; }
      if ( name.indexOf('Bitstream') > -1 ) { category = 'H'; }
      if ( name.indexOf('Butter Lindner') > -1 ) { category = 'F'; }
      if ( name.indexOf('Call A Bike') > -1 ) { category = 'T'; }
      if ( name.indexOf('Dr. House Solutions Gmbh') > -1 ) { category = 'H'; }
      if ( name.indexOf('Feinkost') > -1 ) { category = 'F'; }
      if ( name.indexOf('Fidibus') > -1 ) { category = 'H'; }
      if ( name.indexOf('Giro') > -1 ) { category = 'C'; }
      if ( name.indexOf('Brot') > -1 ) { category = 'F'; }
      if ( name.indexOf('Supermarkt') > -1 ) { category = 'F'; }
      if ( name.indexOf('Lichtblick') > -1 ) { category = 'H'; }
      if ( name.indexOf('Luigi') > -1 ) { category = 'F'; }
      if ( name.indexOf('Ferien') > -1 ) { category = 'V'; }
      if ( name.indexOf('Rundfunkgebühren Ard/Zdf') > -1 ) { category = 'H'; }
      if ( name.indexOf('Schnitzelei') > -1 ) { category = 'F'; }
      return category;
    };

    this.convertCurrency = function(currencyCode) {
      switch(currencyCode) {
        case 'EUR':
          return '€';
        case 'USD':
          return '$';
        default:
          return '€';
      }
    };
  });
