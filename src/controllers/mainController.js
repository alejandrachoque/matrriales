const controller= {
    index:(req,res)=>{
        res.render('index')
    },
    users:(req,res)=>{
        res.send('Usuarios registrados')
    },


    //tp de cookies
    formulario:(req,res)=>{
        res.render('formulario')
    }
}


module.exports= controller;