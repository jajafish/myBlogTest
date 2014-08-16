// var mongoose = require('mongoose')
//     , passport = require('passport')
//     , LocalStrategy = require('passport-local')
//     , User = mongoose.model('User')
//     , utils = require('./utils')

// module.exports = function(){
//     passport.serializeUser(function (user, done){
//         done(null, user.id)
//     })

//     passport.deserializeUser(function (id, done){
//         User.findOne({ _id: id}, function(err, user){
//             done(err, user)
//         })
//     })

//     passport.use(new LocalStrategy(
//         {
//             usernameField : "email",
//             passwordField : "password",
//             passReqToCallback : true
//         },

//         function(req, email, password, done){
//             User.findOne({ email: email }, function(err, user){
//                 if (err) { return done(err);}
//                 if (!user){
//                     return done(null, false, {message: "inccorrect email"});
//                 }
//                 if (!user.validPassword(password)){
//                     return done(null, false, {message: "Incorrect password"});
//                 }
//                 return done(null, user);
//             });
//         }


//     });

//     passport.use("local-signup", new LocalStrategy({
//         usernameField : "email",
//         passwordField : "password",
//         passReqToCallback : true,
//         passReqToCallback : true
//     },
//     function(req, email, password, done){
//         process.nextTick(function(){
//             | User.findOne({'email' : email}, function(err, user){
//                 if (err)
//                     return done(err);
//                 if (user){
//                     return done(null, false, req.flash('signupMessage', 'That email is already taken'));
//                 } else {
//                     var newUser = new User();
//                     newUser.email = email;
//                     newUser.password = utils.toMd5(password);

//                     newUser.save(function(err){
//                         if (err)
//                             throw err;
//                         return done(null, newUser);
//                     });
//                 }
//                 }
//             })
//         })
//     }

//     ))







// }