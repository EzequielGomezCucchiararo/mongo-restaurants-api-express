angular.module('myApp', ['ngRoute', 'ngMap', 'my.ui.bootstrap', 'myControllers'])
	.config( function ($routeProvider) {

		$routeProvider
      // .when('/', {
      //   templateUrl: 'views/home.html',
      //   controller: 'HomeCtrl'
      // })
      .when('/', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .when('/borough/:borough', {
        templateUrl: 'views/results.html',
        controller: 'ByBoroughCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

	})

