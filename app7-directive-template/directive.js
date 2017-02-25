angular.module('app7')
  .directive('appDirective', function() {
    return {
      restrict: 'AE',
      template:  '<header><a href="" style="text-decoration: none; margin: 50"><em>Page 1</em></a><a href="" style="text-decoration: none; margin: 50"><strong>Page 2</strong></a><a href="" style="text-decoration: none; margin: 50">Page 3</a></header>',

    }
  })
