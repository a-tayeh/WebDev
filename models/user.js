var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    firstName:  String,
    lastName:   String,
    email:      String,
    username:   String,
    password:   String,
    
    

});
userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", userSchema);