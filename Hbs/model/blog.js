const mongoose = require("mongoose");

let blogSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    content : {
        type : String,
        require : true
    },
    author : {
        type : String,
        require : true
    },
    date : {
        type : Date,
        default : Date.now()
    }
});

module.exports = mongoose.model("Blog", blogSchema);