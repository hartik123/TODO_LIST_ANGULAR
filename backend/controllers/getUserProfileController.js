const UserModel = require("../models/UserModel");

const getUserProfileController = async (req, res) => {
    try {
        const userId = req.body.userId; // Assuming user ID is stored in req.user by authentication middleware
        const userProfile = await UserModel.findById({_id:userId}); // Exclude password from the response
        console.log(userProfile)
        if (!userProfile) {     
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(userProfile);
    } catch (err) {     
        console.error("Error fetching user profile:", err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
module.exports = getUserProfileController;