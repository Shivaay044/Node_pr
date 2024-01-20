const mongoose = require("mongoose");


const AuthSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})



const AuthModel = mongoose.model("user",AuthSchema);


module.exports = AuthModel ;