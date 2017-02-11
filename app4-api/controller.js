angular.module('apiApp').controller('mainCtrl',function($scope,mainSvc){

$scope.getSmurfs = function() {
  mainSvc.getSmurfs()
  .then(function(data){
    $scope.smurfs = data;
  })
}
$scope.getSmurfs();

})
