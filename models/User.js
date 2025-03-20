const  mongoose = require('mongoose');

// Schema Creation
const userSchema = new mongoose.Schema(
    {
        firstName: {
            type:String,
            required : true,
        },
        lastName: {
            type : String,
            required : true,
        },
        email:{
            type: String,
            required: true,
        },
        age: {
            type:Number,
            required : true,
        },
        createdAt:{
            type: Date,
            required: true,
            default: Date.now(),
        }
    }
);

// Model creation
// User is the name of the model
// userSchema is name of the schema 
module.exports = mongoose.model("User", userSchema);