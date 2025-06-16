const UserModel = require("../models/UserModel");
const { generateAccessToken } = require("../jwt-auth/tokenAuthentication");

const loginController = async (req, res) =>{
    try{
        const response = await UserModel.findOne({username:req.body.username, password:req.body.password});
        console.log(response);
        if(response!=null){
            return res.status(200).json({
                message: "User Logged In Successfully",
                token: generateAccessToken({_id:response._id, username: response.username}),
            })
        }
        res.status(400).json({
            message: "user credentials are not valid",
            user: response
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

module.exports = loginController;