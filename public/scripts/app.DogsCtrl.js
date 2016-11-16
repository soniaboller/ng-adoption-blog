angular.module('adoptionBlog')
    .controller('DogsCtrl', function($scope, $http) {

        $scope.posts = [];

        $scope.fetch = function() {
            $http.get('http://localhost:9292/dog').success(function (results) {
                $scope.posts = results;
            }).error(function(err) {
                console.log('Fetch failed; it didn\'t happen');
                console.log(err);
            });
        };

        $scope.fetch();

    });