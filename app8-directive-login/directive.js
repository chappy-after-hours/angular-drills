angular.module('app8')
  .directive('loginDirective', function(){
    return {
      restrict: "E",
      templateUrl: 'loginDirectiveTempl.html',
      scope: true,
      controller: function($scope){
        $scope.submit = function() {
          alert('username is: '+ $scope.username + ' and password is: '+ $scope.password);
          $scope.username = '';
          $scope.password = '';
          $scope.focusIt();
        }

      },
      link: function(scope,elem,attrs) {
        scope.focusIt = function() {
          elem[0].firstChild[0].focus();
        };
        scope.focusIt();
      }
    }
  })
