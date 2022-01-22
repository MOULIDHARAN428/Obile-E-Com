const jwt = require("jsonwebtoken");
require("dotenv").config();
const generateToken = (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET,{
        expiresIn:"30d",
    });
};
/*jwt.sign({ 
    email: user.email,
    _id: user._id }, 
    'RESTFULAPIs')*/
module.exports = generateToken;