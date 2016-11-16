angular.module('adoptionBlog')
    .controller('CatsCtrl', function($scope, $http) {

        $scope.posts = [];

        $scope.fetch = function() {
            $http.get('http://localhost:9292/cat').success(function (results) {
                $scope.posts = results;
            }).error(function(err) {
                console.log('Fetch failed; it didn\'t happen');
                console.log(err);
            });
        };

        $scope.fetch();

    });