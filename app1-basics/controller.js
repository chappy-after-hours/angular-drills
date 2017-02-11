angular.module('app1').controller('mainCtrl',function($scope, mainSvc){
  $scope.svcArray = mainSvc.getArr;

})
