const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
    username : {
        type: String,
    },
    email:{
        type: String,
        
    },
    password:{
        type:String,
        required : true
    }
},
{ timestamps: true, versionKey:false }
)


const AuthModel = mongoose.model("user",AuthSchema)


module.exports = {
    AuthModel
}