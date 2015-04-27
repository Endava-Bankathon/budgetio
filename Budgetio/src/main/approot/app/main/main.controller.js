'use strict';

angular.module('budgetio')
  .controller('WelcomeCtrl', function ($scope) {
    $scope.welcomeCategories = [
      {
        'title': 'How much do you want to spend on your <b>FOOD</b>?',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'How much do you want to spend on your <b>HOBBY</b>?',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'How much do you want to spend on your <b>Holiday</b>?',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      }
    ];
  });
