angular.module('app1').service('mainSvc', function() {

  var arr = [
    {one:"This is the first Object",
      two:"This is the second item in the first object"
    },{one:"This is the Second Object",
      two:"This is the second item in the Second object"
    },{one:"This is the Third Object",
      two:"This is the second item in the Third object"
    },{one:"This is the 4th Object",
      two:"This is the second item in the 4th object"
    },{one:"This is the 5th Object",
      two:"This is the second item in the 5th object"
    },{one:"This is the 6th Object",
      two:"This is the second item in the 6th object"
    },{one:"This is the 7th Object",
      two:"This is the second item in the 7th object"
    }
  ]

  this.getArr = arr;


})
