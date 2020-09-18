// Aquí se ponen (usan) las dependencias y dependencias de desarrollo
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { use } = require('./routes');
const app = express();

// configuraciones del servidor
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
/* middlewares (Lógica de de intercambio de información)
además de funciones que se ejecutan antes de que las rutas procesen algo*/


/* rutas (Aquí es donde mediante rutas se va a acceder a los diferentes archivos que se deconstruyeron y que accede
el archivo index.html)*/
    app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listenning the server (Aquí se configura el puerto en donde nuestra aplicación va  a estar trabajando)
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})