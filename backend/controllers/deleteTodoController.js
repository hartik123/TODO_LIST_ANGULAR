const model = require('../models/ToDoModel');

const deleteTodoController = async(req, res)=>{
    try{
        const response = await model.deleteOne({_id: req.body.id});
        res.status(200).json({
            message:"Todo deleted successfully",
            response: response
        })
    }
    catch(err){
        console.log("Error deleting todo: ", err);
        res.status(500).json({message: 'Internal server error'});
    }
}

module.exports = deleteTodoController;