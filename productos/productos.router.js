const express = require('express');
const router = express.Router();

const app = express();
let productos = [];

router.get('/listar', (req, res) => {

    if (productos.length > 0) {
        res.send(JSON.stringify(productos));
    } else {
        res.send(JSON.stringify({ error: 'no hay productos cargados' }));
    }


});

router.get('/listar/:id', (req, res) => {
    if (req.params.id > productos.length - 1 || req.params.id < 0) {
        res.send(JSON.stringify({ error: 'producto no encontrado' }))

    } else {
        res.send(JSON.stringify(productos[req.params.id - 1]))
    }


});

router.post('/guardar', (req, res) => {

    console.log(req.body);
    let obj = req.body;
    obj.id = productos.length + 1;
    productos.push(req.body);
    res.send(req.body);


});


router.put('/actualizar/:id', (req, res) => {

    console.log(req.body);
    productos[req.params.id - 1].title = req.body.title;
    productos[req.params.id - 1].price = req.body.price;
    productos[req.params.id - 1].thumbnail = req.body.thumbnail;
    res.send(JSON.stringify(productos[req.params.id - 1]));


});

router.delete('/borrar/:id', (req, res) => {
    let obj = productos.splice(req.params.id - 1, 1);
    res.send(JSON.stringify(obj));


});

module.exports = router;