const UserModel = require("../models/UserModel");
const { generateAccessToken } = require("../jwt-auth/tokenAuthentication")

const registerController = async (req, res) =>{
    console.log(req.body);
    try{
        const {firstName, lastName, age, address, phoneNumber, username, password} = req.body;
        const response  = await UserModel.create({
            username: username,
            password: password,
            firstName: firstName,  
            lastName: lastName,
            age: age,
            address: address,
            phoneNumber: phoneNumber,
            email: req.body.email
        })
        response.save();
        res.status(200).json({
            message: "user created successfully",
            token: generateAccessToken({_id:response._id, username: response.username}),

        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

module.exports = registerController;