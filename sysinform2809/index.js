var Http = require( 'http' );
var server = Http.createServer(function(request,response){
    console.log('Alguien entró');
    console.log(request.url);
    console.log(request);
    response.writeHead(200,"Content - Type:text/html");
    if (request.method == 'GET') {

      response.write("<style> h1 {color:blue} </style>"");
      response.write("<h1>Hola ICO Fes Aragon</h1>");

    }else {
      response.Write("No es get");
    }


    response.end();

});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
