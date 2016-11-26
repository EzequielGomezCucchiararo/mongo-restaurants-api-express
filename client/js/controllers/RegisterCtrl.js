angular.module('myControllers')
	.controller('RegisterCtrl', function ($scope, $uibModalInstance, AuthService, data ) {

		console.log("login...")
		console.log(data)

		$scope.cancel = function() {
			console.log("cancel...")
	    $uibModalInstance.dismiss('canceled');
	  }; // end cancel

	 	$scope.createUser = function() {

	 		console.log("registeting...")
	 		console.log($scope.user)
	 		const { username, password } = $scope.user;

	 		AuthService.register( $scope.user )
	 			.then( () => AuthService.login( { username, password } ) )
 				.then( console.log )
 				.then( () => $uibModalInstance.close( $scope.user ) )
 				.catch( err => {
 					console.log("Something went wrong!")
 					console.log(err)
 				})
	  }; // end save


  });
