const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const usersSchema = mongoose.Schema(
    {
        username: {
            type : String,
            required : true
        },
        password: {
            type : String,
            require : true
        },
        email: {
            type : String,
            required : true,
            unique : true
        },
        telno: {
            type : String
        },
        dob: {
            type: Date
        },
        gender: {
            type : String
        },
        address: {
            type : String,
            required : true
        },
        token: {
            type : String,
            required : true
        },
        isAdmin: {
            type : Boolean,
            required: true,
            default: false 
        }
    },
    {
        timestamps : true
    }
    
);

usersSchema.methods.matchPassword = async function (inputPassword)  {
    return  await bcrypt.compare(inputPassword, this.password);
}

//POSITIONS ARE IMPORTANT UP ADN DOWN

usersSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt); 
});

const user = mongoose.model("user",usersSchema);

module.exports = user;

user.schema.path('email').validate(function (value, respond) {                                                                                           
    user.findOne({ email: value }, function (err, user) {                                                                                                
        if(user){
            console.log("Email already exits!");
        }                                                                                                                         
    });                                                                                                                                                  
}, 'This email address is already registered');



/*usersSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};*/