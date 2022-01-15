const express = require("express");
const router = express.Router();
const User = require("../Modal/userModal");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
var  jwt = require('jsonwebtoken');

router.route('/').post((req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const telno = req.body.telno;
    const dob = req.body.dob;
    const gender = req.body.gende;
    const address = req.body.address;
    
    const newUser = new User({
        username,
        password,
        email,
        telno,
        dob,
        gender,
        address
    });
    const token = generateToken(newUser._id);
    //const token = jwt.sign({ email: email,_id: newUser._id }, 'RESTFULAPIs');
    //NO NEED OF tokengeneratore and .env func
    newUser.token = token;
    if(newUser){
        res.status(201);
        newUser.save();
        console.log("User had been registered successfully!");
    }
    else{
        res.status(400);
        console.log("Can't create document, error occured!");
    }
    
});

module.exports = router;