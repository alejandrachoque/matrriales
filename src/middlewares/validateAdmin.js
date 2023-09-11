//express validator
const { check, validationResult}= require('express-validator')
//"DB"
const data= require('../data/dataUser.json')

const arrValidateSearch= [
    check('user').notEmpty().withMessage('Debe ingresar un username')
]
const validateAdmin=(req,res,next)=>{
//desestructurar la query , le llega el name del imput



const errors= validationResult(req)

//    errors esta vacio? = no hay errores > TRUE= Esta vacio TODO OK / FALSE:  no esta vacio = hay errores
if(errors.isEmpty()===true){
    
    const{user}= req.query;
    //evaluar si esta dentro de mi array de datos

  const findAdmin= data.find((admiData)=>admiData.name===user);
if(findAdmin){
      next()
} else{
    res.send('No tienes los privilegios para ingresar')
}
  
}  else{ 
    console.log(errors)
    console.log(errors.mapped())
    res.render('index',{
       
        errors: errors.mapped()
    })
}
}
//console.log(errors.mapped())




module.exports= {
    arrValidateSearch,
    validateAdmin
}