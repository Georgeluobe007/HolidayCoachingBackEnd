
const express = require("express");
const router = express.Router();

const { UserTable} = require("../models/");



router.post("/register", async (req, res) => {
   
    const {surname,name,phone} = req.body;

const poneNumber = await UserTable.findOne({where:{userphone:phone}})
if(poneNumber){
    res.json({error:
        "this phone number has already been used by someone else, maybe you sould try another phone number"})
}else{
    UserTable.create({
        userSurname:surname,
        userName:name,
        userphone:phone
    })
    res.json({userName:name,userphone:phone,userSurname:surname});
}
  
   
});




module.exports = router;