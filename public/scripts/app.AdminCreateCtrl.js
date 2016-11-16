angular.module('adoptionBlog')
    .controller('AdminCreateCtrl', function ($scope, $http){
        $scope.messages = [
            'please fill out all fields',
            'thanks for post -- view blog to see it live',
            'thanks for dog -- view dogs to see it live',
            'thanks for cat -- view cats to see it live'
        ];

        $scope.message = $scope.messages[0];
        $scope.dogMessage = $scope.messages[0];
        $scope.catMessage = $scope.messages[0];

        $scope.createPost = function(title, content, tags){
            $http({
                url: 'http://localhost:9292/blog/',
                method: 'post',
                params: {title: title, content: content, tags: tags}
            }).success(function(results){
                console.log('success');
                $scope.message = $scope.messages[1]
            }).error(function(err){
                console.log(err)
            })

        };

        $scope.createDog = function(dogName, dogNote, dogImg){
            $http({
                url: 'http://localhost:9292/dog/',
                method: 'post',
                params: {name: dogName, note: dogNote, img: dogImg}
            }).success(function(results){
                console.log('success');
                $scope.dogMessage = $scope.messages[2]
            }).error(function(err){
                console.log(err)
            })

        };

        $scope.createCat = function(catName, catNote, catImg){
            $http({
                url: 'http://localhost:9292/cat/',
                method: 'post',
                params: {name: catName, note: catNote, img: catImg}
            }).success(function(results){
                console.log('success');
                $scope.catMessage = $scope.messages[3]
            }).error(function(err){
                console.log(err)
            })

        }
    });