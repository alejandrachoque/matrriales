/*function logMiddleware(req,res,next){
    next()

}
module.exports= logMiddleware*/
const req = require('express/lib/request');
const fs = require('fs');
const path= require('path');

//configurar el path al archivo

const pathFile= path.join(__dirname,'..','logs','userlogs.txt')

const userLogs= (req,res,next)=>{
    fs.appendFileSync(pathFile,`El usuario hizo una petición con método : ${req.method} e 
    ingresó a la ruta: ${req.url}
    ` )
    next() 
}

module.exports=userLogs