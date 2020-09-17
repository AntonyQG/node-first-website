// Aquí se ponen (usan) las dependencias y dependencias de desarrollo
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// configuraciones del servidor
app.set('port', 3000);

/* middlewares (Lógica de de intercambio de información)
además de funciones que se ejecutan antes de que las rutas procesen algo*/


/* rutas (Aquí es donde mediante rutas se va a acceder a los diferentes archivos que se deconstruyeron y que accede
el archivo index.html)*/
app.get('/', (req, res) => {
    res.send('Hello World!, mi first node app');
});

// static files


// listenning the server (Aquí se configura el puerto en donde nuestra aplicación va  a estar trabajando)
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})