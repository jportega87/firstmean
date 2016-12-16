console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http) {
    var friends = [];
    var friend = {};
    function FriendsFactory(){
    var _this = this;
    this.create = function(newfriend, callback){
        console.log(newfriend);
        $http.post('/friends', newfriend).then(function(returned_data){
            console.log(returned_data.data);
            callback(returned_data.data);
      });
    };
    this.update = function(upfriend, id){
        console.log("Made it to the edit factory.")
        $http.put('/friends/'+id, upfriend).then(function(returned_data){
            console.log(returned_data.data);
        });
    };
    this.index = function(callback){
      $http.get('/friends').then(function(returned_data){
        console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
    };
    this.delete = function(id){
        console.log("Made it to the edit factory.")
        $http.delete('/friends/'+id);
    };
    this.getFriend = function(id, callback){
        $http.get('/friends/' + id).then(function(returned_data){
          console.log(returned_data.data);
          friend = returned_data.data;
          callback(friend);
        })};
    }
    console.log(new FriendsFactory());
    return new FriendsFactory();
}]);
