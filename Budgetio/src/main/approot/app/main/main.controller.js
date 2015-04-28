'use strict';

angular.module('budgetio')
  .controller('WelcomeCtrl', function ($scope, $state) {
    $scope.welcomeCategories = [
      {
        'title': 'FOOD',
        'url': 'https://angularjs.org/'
      },
      {
        'title': 'HOBBY',
        'url': 'http://browsersync.io/'
      },
      {
        'title': 'HOLIDAY',
        'url': 'http://gulpjs.com/'
      }
    ];

    $scope.next = function() {
      var carousel = $('.owl-carousel').data().owlCarousel;
      if (carousel.currentItem === carousel.itemsAmount - 1) {
        //Navigate to dashboard
        $state.go('dashboard');
      } else {
        carousel.next();
      }
    };
  });
