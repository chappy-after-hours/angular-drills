angular.module('app10')
  .directive('imgDirective', function() {
    return {
      restrict: "E",
      scope: {
        imgNow: "@"
      },
      controller: function($scope) {
        console.log($scope)
      },
      link: function(scope,elem,attrs) {
        console.log(elem[0].lastChild);
        // elem.hover().css('opacity', '0.5')
        elem.on('mouseover', function(e) {
          elem.css('opacity', '0.5');
        })
        elem.on('mouseleave', function(e){
          elem.css('opacity', '1');
        })

        // elem.bind('hover', function(e){
        //   elem.css('opacity', '0.5')
        // })
      },
      template: '<img src="{{imgNow}}">'
    }
  })
