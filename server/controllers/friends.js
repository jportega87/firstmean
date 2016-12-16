console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
var mongoose = require('mongoose');
Friend = mongoose.model("Friend");

function FriendsController(){
  this.index = function(req,res){
    Friend.find( {}, function(err, data) {
        if(err) {
            console.log("You really suck at this.");
        } else {
            res.json(data);
        }
    });
  };
  this.create = function(req,res){
      console.log("BACKEND CREATE FUNCTION")
      Friend.create({first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday}, function(err, data){
          if(err){
              console.log("Could not add entry to database.");
          } else {
              console.log(data)
              res.json({friend: data});;
          }
      });
  };
  this.update = function(req,res){
    console.log(req.body);
    console.log("BACKEND UPDATE FUNCTION");
    Friend.update({ _id: req.params.id }, req.body, function(err){
        if(err) {
            console.log("Error Updating Data");
        } else {
            res.json("Response");
        }
    });
  };
  this.delete = function(req,res){
      console.log("BACKEND DELETE FUNCTION");
      Friend.remove({ _id: req.params.id }, function(err){
          if(err) {
              console.log("Error Updating Data");
          } else {
              res.json("Response");
          }
      });
  };
  this.show = function(req,res){
    Friend.find({_id: req.params.id}, function(err, data) {
        if(err) {
            console.log("Nonsense");
        } else {
            console.log("Data Found!");
            console.log(data);
            res.json(data);
        }
    })
  };
}
module.exports = new FriendsController(); // what does this export?
