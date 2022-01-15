const express = require("express");
const router = express.Router();
const Query = require("../Modal/queryModal");

router.route('/').post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const telno = req.body.telno;
    const query = req.body.query;
    const contacttype = req.body.contacttype;
    
    const newQuery = new Query({
        name,
        email,
        telno,
        query,
        contacttype
    });
    newQuery.save();
    console.log("Query have been recorded!");
});

module.exports = router;