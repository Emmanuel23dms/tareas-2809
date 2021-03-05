var express = require('express');
var router = express.Router();

//Aqui van las rutas y metodos
//http://127.0.0.1:3000/campeones/
router.get('/', (req,res,next)=>{
  res.send('Bienvenido invocador!!!');
} );

router.get('/garen',(req,res,next)=>{
  res.render('campeongaren',{nombre:'Garen',pasiva:'perseverancia'});
})


module.exports = router;
