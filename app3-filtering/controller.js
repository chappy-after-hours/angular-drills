angular.module('app3').controller('mainCtrl',function($scope, mainSvc) {
  $scope.data = mainSvc.getData;
})
