var express = require('express');
var router = express.Router();
var usuario = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("frmlogin",{});
});

router.post('/login',(req,res,next)=>{
  //console.log(req.body.email , req.body.passwd);
 console.log(req.body.email , req.body.passwd);
 usuario.login(req.body.email , req.body.passwd,(e,d)=>{
   if(d){

     ses=req.session;
     console.log(ses.id);
     ses.userdata = d;
     console.log(ses);
     const payload = {
       datos : d
     };
     const clave = process.env.SECRETO || 'dios1234'; //Obtener desde variable de entorno
     const token = jwt.sign(payload,clave,{expiresIn:60*5});
     ses.token = token;
     res.redirect('/');
     //Crear la sesion
     /*Reutilizar la sesion original del chrome
     hacer una nueva, desechando la web browser*/

   }else{
     res.json(e);
   }
 });
});

router.get('/logout',(req,res,next)=>{
  req.session.destroy((falla)=>{
    if (falla) {

      res.send(501,"Error")

    }else {

      res.redirect('/');

    }
  });
});

module.exports = router;
