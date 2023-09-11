const adminController={
    render:(req,res)=>{
        const {user}=req.query
        res.send('Hola admin: '+ user)
    }
}


module.exports= adminController;