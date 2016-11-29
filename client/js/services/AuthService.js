angular.module('myServices')
  .factory("AuthService", function( $rootScope, $http, $location, StorageService, jwtHelper ) {

    function register( userData ) {
      const url = '/auth/register'
      return $http.post( url, userData )
    }

    function login( userData ) {
      const url = '/auth/login'
      return $http.post( url, userData )
                  .then( data => data.data.token )
    }

    function isLoggedIn() {
      try {
        var token = StorageService.readToken();
        var tokenPayload = jwtHelper.decodeToken( token );
        return !( jwtHelper.isTokenExpired( token ) )
      } catch( e ) {
        return false
      }
    }


    function logout() {
      StorageService.removeToken();
      delete $rootScope.loggedUser;
    }

    function setCredentials( token ) {

      $rootScope.loggedUser = {};
      const tokenPayload = jwtHelper.decodeToken( token );
      const { id, username, email, fullname, image, social = {} } = tokenPayload;
      $rootScope.loggedUser = { id, username, email, fullname, image, social }
      return token;

    }

    return { register, login, isLoggedIn, logout, setCredentials }

  })