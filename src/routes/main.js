const express= require('express');
const router= express.Router();

const mainController= require('../controllers/mainController');

router.get('/', mainController.index);
router.get('/usuarios',mainController.users)

//tp cookies
router.get('/formulario', mainController.formulario)
module.exports=router