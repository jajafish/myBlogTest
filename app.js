var express                 = require("express");
var bodyParser              = require("body-parser");
var morgan                  = require("morgan");
var methodOverride          = require("method-override");
var mongoose                = require("mongoose");
var config                  = require("config");
var utils                   = require("./lib/utils");
var mongooseConnection      = utils.connectToDatabase(mongoose, config.db);
// var passport                = require('passport');
// var session                 = require("express-session");
// var sessionStore            = require("connect-redis")(session);
var cookieParser            = require("cookie-parser");
// var flash                   = require("connect-flash")
var app                     = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(cookieParser());
// app.use(session({
//     secret: 'myHighSecurePassword',
//     store: new sessionStore({url:process.env.REDIS_URL})
// }))

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {layout: true});

require("./models/Article")(mongooseConnection);
require("./models/User")(mongooseConnection);
require("./models/Comment")(mongooseConnection);

require("./controllers/indexController")(app, mongooseConnection);
require("./controllers/ArticleController")(app, mongooseConnection);
require("./controllers/CommentController")(app, mongooseConnection);

app.listen(app.get("port"), function (){
    console.log("express server listening on port " + app.get("port"));
});