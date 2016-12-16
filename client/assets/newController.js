app.controller('newController', ['$scope','friendsFactory', function($scope, friendsFactory) {
    var index = function(){
        friendsFactory.index(function(returnedData){
            $scope.friends = returnedData;
            console.log($scope.friends);
        });
    };
    index();

    $scope.create = function(){
        friendsFactory.create($scope.newFriend, function(data) {
            if (data.errors) {
                //display the errors
            } else {
                $scope.newFriend = {};
                index();
            }
        });
    };

    $scope.delete = function(id){
        friendsFactory.delete(id);
        index();
    }
}]);
