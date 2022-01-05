const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    phone:{
        type:String,
        
        unique:true,
        
    
    },
    email:{
        type:String ,
        
        unique:true,
        
    
    },
    name:{
        type:String,
       
    }
    

},{timestamps:true});

module.exports=mongoose.model("User",UserSchema);