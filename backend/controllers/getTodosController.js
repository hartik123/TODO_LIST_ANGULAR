const express = require('express');
const todoModel = require("../models/ToDoModel");

const getTodosController = async (req, res) =>{
    try{
        const allTodos = await todoModel.find({userId: req.body.userId});
        res.json(allTodos);
    }
    catch(err){
        console.error("Error fetching todos:", err);
        res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = getTodosController;