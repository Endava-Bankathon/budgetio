'use strict';

angular.module('budgetio')
  .directive('nicescrollbar', function() {
  return {
    restrict: 'AE',
    transclude: true,
    template:  '<div ng-transclude></div>',
    replace: false,
    link: function($scope, $elem) {


      $elem.mouseenter(function() {
        $elem.css('cursor','row-resize');
      });

      $elem.niceScroll();
    }
  };
});
