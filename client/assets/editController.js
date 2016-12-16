app.controller('editController', ['$scope','friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {
    var index = function(){
        friendsFactory.index(function(returnedData){
            $scope.friends = returnedData;
            console.log($scope.friends);
        });
    };
    index();

    console.log($routeParams.id);
    friendsFactory.getFriend($routeParams.id, function(returnedData){
        $scope.upFriend = returnedData[0];
        console.log($scope.upFriend);
    });

    $scope.update = function(id, callback) {
        friendsFactory.update($scope.upFriend, $routeParams.id);
        $location.url('/');
    };
}]);
