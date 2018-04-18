var myApp = angular.module('myApp');

myApp.controller('ContentController',['$scope','$http','$location','$routeParams',function($scope, $http, $location, $routeParams){
	console.log('ContentController loader.............');


	$scope.getContents = function(){
		$http.get('/api/contents')
		.then(function(response){
			$scope.contents = response.data
		});
	}

	$scope.getBook = function(){
		var id = $routeParams.id;
		$http.get('/api/books/'+id)
		.then(function(response){
			$scope.book = response.data
		});
	} 
	$scope.addContents = function(){
		console.log("ok tesst");
		console.log($scope.contents);
		$http.post('/api/contents', $scope.contents).then(function(response){
			window.location.href='/';
		});
	}
	$scope.updateBook = function(){
		var id = $routeParams.id;
		
		$http.put('/api/books/'+id, $scope.book).then(function(response){
			window.location.href='#!/books';
		});
	}


	$scope.removeBook = function(id){	
		$http.delete('/api/books/'+id, $scope.book).then(function(response){
			window.location.href='#!/books';
		});
	}



	
}]);