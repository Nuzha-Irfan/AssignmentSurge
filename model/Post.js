const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId
      },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    likes: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref : 'users'
          }
        }
      ],

      comments: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref : 'users'
          },
          text: {
            type: String,
           
          },
          name: {
            type: String
          },
          
          date: {
            type: Date,
            default: Date.now
          }
        }
      ],
   
      date: {
        type: Date,
        default: Date.now
      },
      postedby:{
          type:String
      }
});

module.exports = Post = mongoose.model("post", PostSchema); // User is the variable, User is the name of the model, UserSchema is the model schema
