'use strict';

angular.module('budgetio')
  .controller('WelcomeCtrl', function ($scope, $state) {
    $scope.welcomeCategories = [
      {
        'title': 'FOOD',
        'value': '',
        'slideClass': 'slide1'
      },
      {
        'title': 'HOBBY',
        'value': '',
        'slideClass': 'slide2'
      },
      {
        'title': 'HOLIDAY',
        'value': '',
        'slideClass': 'slide3'
      }
    ];

    $scope.checkNextAvailable = function(item) {
      return !(item.value > 0);
    };

    $scope.next = function(item) {
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
