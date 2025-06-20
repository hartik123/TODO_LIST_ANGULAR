const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    title : {
        type: String,
        required: true
    }
})

const todoModel = mongoose.model("TodoList", todoSchema);

module.exports = todoModel;