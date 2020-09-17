/* rutas (Aquí es donde mediante rutas se va a acceder a los diferentes archivos que se deconstruyeron y que accede
el archivo index.html)*/
const express = require('express');
const router = express.Router();

//ruta principal
router.get('/', (req, res) => {
    res.render('index.html', { title: 'First Node Website' });
});

//contact
router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page' });
});


module.exports = router;