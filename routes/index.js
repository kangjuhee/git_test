var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient; // 클라이언트가 서버에 접근할 수 있도록.
var client = require('socket.io').listen(8080).sockets
//node server.js //서버 시작하게하게하는거
//htmldptj

mongo.connect('mongodb://127.0.0.01/cha', function(err, db){
  if(err)throw err;

  client. on(connect, function(socket){
    var col = db.collection('message');

    //wait for input
    socket.on('input', function(data){
      console.log(data); //어떻게 돌아가는 지 알 수 있다.
      var name = data.name
      var message = data.message;
      var whitespacePatter =  /^\/;

      if(whitespacePattern.test(name) || whitespacePattern.test(message)) {
        console.log('inivalid');

      }else{
        col.insert({name : name, message : message}, function(){
          console.log('inserted');
        }); //col.insert

        });
      }
         });//socket.on
  });//client.on
}); //monogo.connect
client.on('connection', function(socket){
  console.log('someone has conneced');
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
