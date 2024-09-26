const User = require("../models/userModel.js")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerAdmin = async(req, res) => {
    const { username, password } = req.body;

    if(!username || !password){
        return res.status(400).json({
            message: "Please provide a valid username and password",
            success: false,
        })
    }

    const existingUsername = await User.findOne({ username });
    if(existingUsername){
        return res.status(400).json({
            message: "Username already taken",
            success: false,
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = await User.create({
        username,
        password: hashedPassword
    });

    if(newAdmin){
        return res.status(200).json({
            message: "New admin registered successfully",
            success: true
        })
    }
    else {
        return res.status(400).json({
            message: "User details are invalid",
            success: false
        })
    }
};

const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password){
        return res.status(400).json({
            message: "Provide all credentials",
            success: false
        })
    }
    const admin = await User.findOne({ username });

    if(admin && (await bcrypt.compare(password, admin.password))){
        const accesstoken = jwt.sign(
            {
                user : {
                    username: username,
                    id: admin.id
                }
            },
            process.env.ACCESS_TOKEN_SECRET_KEY,
            { expiresIn: '1h'}
        );
        return res.status(200).json({
            message: "Login Successful",
            accesstoken,
            success: true
        })
    }
    else {
        return res.status(400).json({
            message: "Invalid credentials",
            success: false
        })
    }
}
module.exports = { registerAdmin, loginAdmin }