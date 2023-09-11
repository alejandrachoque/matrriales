const express= require('express');
const router= express.Router();

const mainController= require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/usuarios',mainController.users)


module.exports=router