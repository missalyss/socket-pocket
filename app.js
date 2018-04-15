var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
const path = require('path');


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', function(req, res) {
  res.render('index')
})

io.on('connection', function(socket){
  console.log("someone entered the chat room!");
});

server.listen(3333, function() {
  console.log('listening on localhost:3333')
})
