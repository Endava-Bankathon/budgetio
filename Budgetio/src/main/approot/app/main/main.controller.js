'use strict';

angular.module('budgetio')
  .controller('WelcomeCtrl', function ($scope, $state) {
    $scope.playme = true;
    $scope.welcomeCategories = [
      {
        'title': 'FOOD',
        'value': '',
        'url': 'https://angularjs.org/',
        'active': true
      },
      {
        'title': 'HOBBY',
        'value': '',
        'url': 'http://browsersync.io/',
        'active': false
      },
      {
        'title': 'HOLIDAY',
        'value': '',
        'url': 'http://gulpjs.com/',
        'active': false
      }
    ];

    $scope.checkNextAvailable = function(item) {
      return !(item.value > 0);
    };
    $scope.next = function(item) {
      if (!item) {
        $scope.playme = false;
        $('#video')[0].play();
        return;
      }
      item.active = false;
      var carousel = $('.owl-carousel').data().owlCarousel;
      if (carousel.currentItem === carousel.itemsAmount - 1) {
        //Navigate to dashboard
        $state.go('dashboard');
      } else {
        carousel.next();
        $scope.welcomeCategories[carousel.currentItem].active = true;
      }
    };
  });
