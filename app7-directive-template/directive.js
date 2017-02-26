angular.module('app7')
  .directive('appDirective', function() {
    return {
      restrict: 'AE',
      templateUrl: 'appDirectiveTempl.html'
    }
  })
