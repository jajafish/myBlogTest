var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(1025);

io.on("connection", function(socket) {
    socket.emit("news", {msg: "User connected"});
})


app.get("/socket/send", function(req, res, next){
    io.socket.emit("news", {msg: "This is custom message"});
})