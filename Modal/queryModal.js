const mongoose = require("mongoose");

const queriesSchema = mongoose.Schema(
    {
        name: {
            type : String,
            required : true
        },
        email: {
            type : String,
            required : true
        },
        telno: {
            type : String,
            required : true
        },
        query: {
            type : String,
            required : true
        },
        contacttype: {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
);

const query = mongoose.model("query",queriesSchema);

module.exports = query;