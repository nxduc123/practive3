
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when('/', {
		controller: 'ContentController',
		templateUrl: '/views/content.html'
			
    })
    $locationProvider.html5Mode({
 		enabled: true,
 		requireBase: false
	});
 });




	

	
