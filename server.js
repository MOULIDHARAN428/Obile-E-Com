const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const {notFound ,errorHandler} = require('./Middlewares/errorMiddleware')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

mongoose.connect("mongodb://localhost:27017/Obile-Ecom");

app.use("/createQuery", require("./Routes/queryRouter"));
app.use("/createUser", require("./Routes/userRouter"));
app.use("/login", require("./Routes/loginRouter"));
app.use(notFound);
app.use(errorHandler);

app.listen(3001, function(){
    console.log("Express server running in port 3001");
    console.log("http://localhost:3001\n");
});