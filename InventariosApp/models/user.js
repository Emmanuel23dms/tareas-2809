const login = (email,passwd,callback) => {

  var err;
  var bd_dato; //simula la infoprmacion de db

  if (email == 'joe@doe.com' && passwd == '1234') {
   //consultar en bd info faltante
    bd_data={
      'email':email,
      'depto':'venta',
      'phone':'5524962162'
    }

  } else {

    err = {'mensaje':'credenciales incorrectas'}

  }
  callback(err,bd_dato);
}

exports.login = login;
