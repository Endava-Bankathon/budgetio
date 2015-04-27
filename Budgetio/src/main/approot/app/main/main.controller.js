'use strict';

angular.module('budgetio')
  .controller('WelcomeCtrl', function ($scope, $state) {
    $scope.welcomeCategories = [
      {
        'title': 'FOOD',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'HOBBY',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'HOLIDAY',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      }
    ];

    $scope.next = function(item) {
      var carousel = $('.owl-carousel').data().owlCarousel;
      if (carousel.currentItem === carousel.itemsAmount - 1) {
        //Navigate to dashboard
        $state.go('dashboard');
      } else {
        carousel.next();
      }
    }
  });
