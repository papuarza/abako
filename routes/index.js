const express = require('express');
const router  = express.Router();
const Producto = require('../models/Producto');
const Entidad = require('../models/Entidad');


let addTheDots = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

let formatTheDate = (date) => {
  let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
  
    return day + '/' + month + '/' + year;
}


router.get('/', (req, res, next) => {
  Producto.find()
  .populate('banco')
  .then((productos) => {
    productos.forEach(p => {
      p.datos[0].saldoPromedio.montoFormateado = addTheDots(p.datos[0].saldoPromedio.monto);
      p.datos[0].multaSaldoInferior.montoFormateado = addTheDots(p.datos[0].multaSaldoInferior.monto);
      p.datos[0].costoCajerosPropios.montoFormateado = addTheDots(p.datos[0].costoCajerosPropios.monto);
      p.datos[0].costoCajerosOtros.montoFormateado = addTheDots(p.datos[0].costoCajerosOtros.monto);
      p.datos[0].fechaFormateada = formatTheDate(p.datos[0].fecha);
    })
    res.render('index', {productos});
  })
});

router.get('/como-funciona', (req, res, next) => {
  res.render('funciona');
});

router.get('/blog', (req, res, next) => {
  res.render('blog');
});

router.get('/blog/finanzas-personales', (req, res, next) => {
  res.render('blog/1');
});

router.get('/terminos', (req, res, next) => {
  res.render('terminos');
});
router.get('/politica', (req, res, next) => {
  res.render('politica');
});

router.get('/contacto', (req, res, next) => {
  res.render('contacto');
});

router.get('/productos', (req, res, next) => {
  Producto.find()
  .populate('banco')
  .then((productos) => {
    productos.forEach(p => {
      p.datos[0].saldoPromedio.montoFormateado = addTheDots(p.datos[0].saldoPromedio.monto);
      p.datos[0].multaSaldoInferior.montoFormateado = addTheDots(p.datos[0].multaSaldoInferior.monto);
      p.datos[0].costoCajerosPropios.montoFormateado = addTheDots(p.datos[0].costoCajerosPropios.monto);
      p.datos[0].costoCajerosOtros.montoFormateado = addTheDots(p.datos[0].costoCajerosOtros.monto);
      p.datos[0].fechaFormateada = formatTheDate(p.datos[0].fecha);
    })
    res.render('productos', {productos});
  })
});

module.exports = router;
