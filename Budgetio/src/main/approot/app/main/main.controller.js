'use strict';

angular.module('budgetio')
  .controller('WelcomeCtrl', function ($scope, $state, UserService) {
    $scope.playme = true;
    $scope.welcomeCategories = [
      {
        title: '',
        video: true,
        slideClass: 'slide0'
      },
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
      if (!item) {
        $scope.playme = false;
        $('#video')[0].play();
        return;
      }
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
