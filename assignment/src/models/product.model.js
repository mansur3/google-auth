const mongoose = require("mongoose");

// const User = require("./user.model");



const postSchema = new mongoose.Schema({
    name : {type : String, required : true},
    price : {type : Number, required : true},
    user : {type : mongoose.Schema.Types.ObjectId, ref : "user", required : true}
})



module.exports = mongoose.model("post", postSchema); 