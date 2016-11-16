angular.module('adoptionBlog')
    .controller('AdminDeleteCtrl', function ($scope, $http){

        $scope.url = 'http://localhost:9292/';
        $scope.blogPosts = [];
        $scope.dogPosts = [];
        $scope.catPosts = [];

        $scope.fetchBlogs = function(){
            $http.get($scope.url + 'blog').success(function(results){
                $scope.blogPosts = results
            }).error(function(err){
                console.log(err)
            })
        };
        $scope.fetchDogs = function(){
            $http.get($scope.url + 'dog').success(function(results){
                $scope.dogPosts = results
            }).error(function(err){
                console.log(err)
            })
        };
        $scope.fetchCats = function(){
            $http.get($scope.url + 'cat').success(function(results){
                $scope.catPosts = results
            }).error(function(err){
                console.log(err)
            })
        };

        $scope.removeBlog = function(blog){
            console.log(blog);
            var fasho = confirm('do u rly wanna delete blog??');
            if (fasho){
                $http.delete($scope.url + 'blog/' + blog.id).success(function(result){
                    $scope.fetchBlogs();
                }).error(function(err){
                    console.log(err)
                })
            }
        };
        $scope.removeDog = function(dog){
            console.log(dog);
            var fasho = confirm('do u rly wanna deletedog ??');
            if (fasho){
                $http.delete($scope.url + 'dog/' + dog.id).success(function(result){
                    $scope.fetchDogs();
                }).error(function(err){
                    console.log(err)
                })
            }
        };
        $scope.removeCat = function(cat){
            console.log(cat);
            var fasho = confirm('do u rly wanna delete cat??');
            if (fasho){
                $http.delete($scope.url + 'cat/' + cat.id).success(function(result){
                    $scope.fetchCats();
                }).error(function(err){
                    console.log(err)
                })
            }
        };

        $scope.fetchBlogs();
        $scope.fetchDogs();
        $scope.fetchCats();
    });