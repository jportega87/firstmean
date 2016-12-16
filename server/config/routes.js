console.log('routes');
var friends = require('../controllers/friends.js')
// What is this 'friends' object we are referencing below??
module.exports = function(app){
  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.put('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete);

  // app.get('/url', function(req, res) {
  //     console.log('WE HIT THE /url ROUTE');
  //     friends.method(req, res);
  // })
}
