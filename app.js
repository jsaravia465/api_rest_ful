const express = require('express');

const app = express();

const productos = require('./productos/productos.router');

const server = app.listen(8080, () => { console.log(`Se levanto correctamente el servidor en el puerto ${server.address().port }`) })



server.on('error', error => {
    console.log(`Ocurrio un error: ${error}   `);
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/productos', productos);
app.use('/static', express.static(__dirname + '/public'));