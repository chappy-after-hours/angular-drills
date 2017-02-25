angular.module('app6')
  .service('mainSvc', function($http){

    this.getData =function(){
      return $http.get('http://swapi.co/api/people')
      .then(function(response) {
        return response.data.results;
        console.log(response.data.results)
      })
    }
  })
