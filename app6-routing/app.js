angular.module('app6',['ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        template: '<div>This is the Home State</div>',
        controller: 'mainCtrl'
      })
      .state('signup', {
        url: '/signup',
        template: "<div>Sign Up Here: </br></hr> <button type='button'>Sign Up Now</button></div>",
        controller: 'mainCtrl'
      })
      .state('details', {
        url: '/details',
        template: '<br>People:<br><ul ng-repeat="person in people"><li><h1>{{person.name}}</h1></li></ul>',
        controller: 'mainCtrl'
      })

      $urlRouterProvider
        .otherwise('/');
  })
