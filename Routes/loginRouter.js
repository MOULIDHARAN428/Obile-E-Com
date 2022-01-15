const express = require("express");
const router = express.Router();
const User = require("../Modal/userModal");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
var  jwt = require('jsonwebtoken');

router.route('/').post(asyncHandler(async(req,res)=>{
    const password = req.body.password;
    const email = req.body.email;

    const user = await User.findOne({email});
    if(!user){
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json({"message":"Invalid Email"});
        console.log("Invalid Email");
    }
    const bool = await user.matchPassword(password);
    if(user && bool == true){
        console.log(user.matchPassword(password));
        /*res.json({ token: generateToken(user._id),
            _id: user._id,
            name: user.username,
            email: user.email,
            password: user.password,
            telno: user.telno,
            dob: user.dob});
            console.log("Logged in!");*/
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({"message":"Logged in successful"});
            console.log("Logged in!");
    }
    else{
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.json({"message":"Invalid Password"});
        console.log("Invalid Password");
    }
}));
//SINGLE LINE TO GENERATE JWT TOKEN
//jwt.sign({ email: user.email,_id: user._id }, 'RESTFULAPIs')
module.exports = router;