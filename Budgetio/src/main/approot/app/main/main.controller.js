'use strict';

angular.module('budgetio')
  .controller('WelcomeCtrl', function ($scope, $state, UserService) {
    $scope.welcomeCategories = [
      {
        'title': 'FOOD',
        code: 'F',
        'value': '',
        'slideClass': 'slide1'
      },
      {
        'title': 'HOUSEHOLD',
        code: 'H',
        'value': '',
        'slideClass': 'slide2'
      },
      {
        'title': 'HOLIDAY',
        code: 'V',
        'value': '',
        'slideClass': 'slide3'
      }
    ];

    $scope.checkNextAvailable = function(item) {
      return !(item.value > 0);
    };

    $scope.next = function(item) {
      UserService.setMaxForCategory(item.code, item.value);
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
