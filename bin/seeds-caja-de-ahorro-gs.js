require('dotenv').config();


const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Entidad = require('../models/Entidad');
const Producto = require("../models/Producto");

const bcryptSalt = 10;

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let productos = [
  {
    banco: 'Banco Atlas',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 300000,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 75000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 5,
        },
        extraccionesCajerosOtros: {
          monto: 3,
        },
        costoCajerosPropios: {
          monto: 3500,
          moneda: 'Gs.'
        },
        costoCajerosOtros: {
          monto: 7700,
          moneda: 'Gs.'
        },
        costoCajerosExterior: '5,5%',
        fecha: new Date()
      }
    ]

  },
  {
    banco: 'Bancop',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 1000000,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 55000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 10,
        },
        extraccionesCajerosOtros: {
          monto: 10,
        },
        costoCajerosPropios: {
          monto: 5500,
          moneda: 'Gs.'
        },
        costoCajerosOtros: {
          monto: 5500,
          moneda: 'Gs.'
        },
        costoCajerosExterior: '3.30 Usd.',
        fecha: new Date()
      }
    ]

  },
  {
    banco: 'Banco Basa',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 300000,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 55000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 100000,
        },
        extraccionesCajerosOtros: {
          monto: 100000,
        },
        costoCajerosPropios: {
          monto: 0,
          moneda: 'Gs.'
        },
        costoCajerosOtros: {
          monto: 0,
          moneda: 'Gs.'
        },
        costoCajerosExterior: 'Sin dato',
        fecha: new Date()
      }
    ]

  },
  {
    banco: 'Banco de la Nación Argentina',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 200000,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 77000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 5,
        },
        extraccionesCajerosOtros: {
          monto: 5,
        },
        costoCajerosPropios: {
          monto: 0.66,
          moneda: 'Usd.'
        },
        costoCajerosOtros: {
          monto: 0.66,
          moneda: 'Usd.'
        },
        costoCajerosExterior: '4.40 Usd.',
        fecha: new Date()
      }
    ]

  },
  {
    banco: 'BNF',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 500000,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 22000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 12,
        },
        extraccionesCajerosOtros: {
          monto: 6,
        },
        costoCajerosPropios: {
          monto: 1500,
          moneda: 'Gs.'
        },
        costoCajerosOtros: {
          monto: 3300,
          moneda: 'Gs.'
        },
        costoCajerosExterior: '15.000 Gs.',
        fecha: new Date()
      }
    ]

  },
  {
    banco: 'Banco Continental',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 1000000,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 220000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 3,
        },
        extraccionesCajerosOtros: {
          monto: 6,
        },
        costoCajerosPropios: {
          monto: 7700,
          moneda: 'Gs.'
        },
        costoCajerosOtros: {
          monto: 7700,
          moneda: 'Gs.'
        },
        costoCajerosExterior: '1.10 Usd.',
        fecha: new Date()
      }
    ]

  },
  {
    banco: 'Banco Familiar',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 100000,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 66000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 0,
        },
        extraccionesCajerosOtros: {
          monto: 0,
        },
        costoCajerosPropios: {
          monto: 6600,
          moneda: 'Gs.'
        },
        costoCajerosOtros: {
          monto: 6000,
          moneda: 'Gs.'
        },
        costoCajerosExterior: '3.3%',
        fecha: new Date()
      }
    ]

  },
  {
    banco: 'Banco GNB',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 5000000,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 275000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 0,
        },
        extraccionesCajerosOtros: {
          monto: 0,
        },
        costoCajerosPropios: {
          monto: 2200,
          moneda: 'Gs.'
        },
        costoCajerosOtros: {
          monto: 6600,
          moneda: 'Gs.'
        },
        costoCajerosExterior: '0.06 Usd.',
        fecha: new Date()
      }
    ]

  },
  {
    banco: 'Interfisa',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 50000,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 50000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 5
        },
        extraccionesCajerosOtros: {
          monto: 0
        },
        costoCajerosPropios: {
          monto: 4500,
          moneda: 'Gs.'
        },
        costoCajerosOtros: {
          monto: 7000,
          moneda: 'Gs.'
        },
        costoCajerosExterior: '32.000 Gs.',
        fecha: new Date()
      }
    ]

  },
  {
    banco: 'Banco Itaú',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 2000000,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 99000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 10
        },
        extraccionesCajerosOtros: {
          monto: 0
        },
        costoCajerosPropios: {
          monto: 3000,
          moneda: 'Gs.'
        },
        costoCajerosOtros: {
          monto: 7700,
          moneda: 'Gs.'
        },
        costoCajerosExterior: '5.5%',
        fecha: new Date()
      }
    ]

  },
  {
    banco: 'Banco Regional',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 10000000,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 150000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 7
        },
        extraccionesCajerosOtros: {
          monto: 0
        },
        costoCajerosPropios: {
          monto: 3300,
          moneda: 'Gs.'
        },
        costoCajerosOtros: {
          monto: 6600,
          moneda: 'Gs.'
        },
        costoCajerosExterior: 'N/A',
        fecha: new Date()
      }
    ]

  },
  {
    banco: 'Banco Rio',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 100000,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 33000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 10
        },
        extraccionesCajerosOtros: {
          monto: 4
        },
        costoCajerosPropios: {
          monto: 0.66,
          moneda: 'Usd.'
        },
        costoCajerosOtros: {
          monto: 0.44,
          moneda: 'Usd.'
        },
        costoCajerosExterior: '3.3%',
        fecha: new Date()
      }
    ]

  },
  {
    banco: 'Banco Sudameris',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 1111111111111,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 198000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 0,
          moneda: 'Gs.'
        },
        extraccionesCajerosOtros: {
          monto: 0,
          moneda: 'Gs.'
        },
        costoCajerosPropios: {
          monto: 4400,
          moneda: 'Gs.'
        },
        costoCajerosOtros: {
          monto: 6600,
          moneda: 'Gs.'
        },
        costoCajerosExterior: 'N/A',
        fecha: new Date()
      }
    ]

  },
  {
    banco: 'Banco Visión',
    tipo: 'Caja de Ahorro',
    moneda: 'Gs.',
    nombre: 'Caja de Ahorro Guaraníes',
    descripcion: '',
    datos: [
      {
        saldoPromedio: {
          monto: 500000,
          moneda: 'Gs.'
        },
        multaSaldoInferior: {
          monto: 100000,
          moneda: 'Gs.'
        },
        extraccionesCajerosPropios: {
          monto: 6
        },
        extraccionesCajerosOtros: {
          monto: 0
        },
        costoCajerosPropios: {
          monto: 3300,
          moneda: 'Gs.'
        },
        costoCajerosOtros: {
          monto: 7700,
          moneda: 'Gs.'
        },
        costoCajerosExterior: '25.000 Gs.',
        fecha: new Date()
      }
    ]

  }
]

let asignarBancos = [];



productos.forEach(prod => {
  asignarBancos.push(
    new Promise((resolve, reject) => {
      Entidad.findOne({nombre: prod.banco})
      .then(entidad => {
        console.log(prod.banco)
        prod['banco'] = entidad._id;
        resolve();
      })
    })
  )
})


Promise.all(asignarBancos)
.then(bancos => {
  console.log(productos)
  Producto.deleteMany()
  .then(() => {
    return Producto.create(productos)
  })
  .then(productosCreados => {
    console.log(`${productosCreados.length} users created with the following id:`);
    console.log(productosCreados.map(u => u));
  })
  .then(() => {
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
})

