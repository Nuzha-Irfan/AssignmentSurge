const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
   
  },
  name:{
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
 
  password: {
    type: String,
    required: true,
  },
  //profile image
  avatar:{
        type:String
  },

  date:{
    type:Date,
    default:Date.now

  }
  
});

module.exports = User = mongoose.model("user", UserSchema); // User is the variable, User is the name of the model, UserSchema is the model schema
