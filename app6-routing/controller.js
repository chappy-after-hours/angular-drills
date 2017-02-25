angular.module('app6')
  .controller('mainCtrl', function($scope,mainSvc){
  $scope.data = mainSvc.getData().then(function(response){
    $scope.people = response;
    console.log($scope.people)
  });
  // console.log($scope.data)
  })
