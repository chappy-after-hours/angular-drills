angular.module('app9')
  .directive('selectDirective', function() {
    return {
      restrict: "A",
      scope:true,
      link: function(scope,elem,attrs) {
        elem.bind('click', function (e) {
          elem[0].select()
        })
      }
    }
  })
