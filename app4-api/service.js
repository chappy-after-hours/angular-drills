angular.module('apiApp').service('mainSvc',function($http){
  this.getSmurfs = function() {
    return $http.get('http://swapi.co/api/people')

    .then(function(data){
      console.log(data)
      return data.data.results;
    })
  }
})
