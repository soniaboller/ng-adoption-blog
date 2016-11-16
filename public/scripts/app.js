console.log('best adoption lgos');


angular.module('adoptionBlog', [ 'ngRoute'
]).config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $routeProvider
      .when('/', {
        templateUrl: 'ngViews/home.html',
        controller: 'PostsCtrl'
      })
      .when('/create', {
        templateUrl: 'ngViews/create.html',
        controller: 'AdminCreateCtrl'
      })
      .when('/admin', {
          templateUrl: 'ngViews/admin.html',
          controller: 'AdminDeleteCtrl'
      })
      .when('/cats', {
          templateUrl: 'ngViews/cats.html',
          controller: 'CatsCtrl'
      })
      .when('/dogs', {
          templateUrl: 'ngViews/dogs.html',
          controller: 'DogsCtrl'
      });

    $routeProvider.otherwise({ redirectTo: '/' });
  }
]);