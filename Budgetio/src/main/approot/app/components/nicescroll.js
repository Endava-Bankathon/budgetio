'use strict';

angular.module('budgetio')
  .directive('niceScrollbar', function($parse) {
  return {
    restrict: 'AE',
    transclude: true,
    template:  '<div ng-transclude></div>',
    replace: false,
    link: function($scope, $elem, $attr) {


      $elem.mouseenter(function() {
        $elem.css("cursor","row-resize");
      });

      $elem.niceScroll({cursorborder:"#ddd",
        cursorcolor:"#ddd",
        cursoropacitymin:"0.0",
        railalign:"left",
        railoffset:true,
        //cursoropacitymax:0.0,
        cursorwidth:"10",
        cursorborderradius:"0px",
        //scrollspeed:100,
        touchbehavior:"true",
        bouncescroll:"true",
        cursordragontouch:"true"
      });
    }
  }
});
