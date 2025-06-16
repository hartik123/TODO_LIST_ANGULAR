const express = require("express");
const todoModel = require("../models/ToDoModel");

const createTodoController = async(req, res)=>{
    try{
        const todoCreated = await todoModel.create({
            userId: req.body.userId,
            title: req.body.title
        })
        todoCreated.save();
        res.status(201).json({
            message:"Todo created successfully"
        })
    }
    catch(err){
        console.log("Error creating todos: ", err);
        res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports = createTodoController;