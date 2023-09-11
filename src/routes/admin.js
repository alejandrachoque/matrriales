const express= require('express');
const router= express.Router();

const adminController=require('../controllers/adminController');


//Middleware
const {arrValidateSearch,validateAdmin}= require('../middlewares/validateAdmin');

//  /admin
router.get('/',arrValidateSearch,validateAdmin,adminController.render);


module.exports= router