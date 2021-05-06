require('dotenv').config();


const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Entidad = require("../models/Entidad");

const bcryptSalt = 10;

mongoose
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let bancos = [
  {
    nombre: 'Banco Atlas',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  },
  {
    nombre: 'Bancop',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  },
  {
    nombre: 'Banco Basa',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  },
  {
    nombre: 'Banco de la Nación Argentina',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  },
  {
    nombre: 'BNF',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  },
  {
    nombre: 'Banco Continental',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  },
  {
    nombre: 'Banco Familiar',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  },
  {
    nombre: 'Banco GNB',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  },
  {
    nombre: 'Interfisa',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  },
  {
    nombre: 'Banco Itaú',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  },
  {
    nombre: 'Banco Regional',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  },
  {
    nombre: 'Banco Rio',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  },
  {
    nombre: 'Banco Sudameris',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  },
  {
    nombre: 'Banco Visión',
    logo: '/images/bank.svg',
    telefono: '021-532-321',
    email: 'contacto@bancoatlas'
  }
]

Entidad.deleteMany()
.then(() => {
  return Entidad.create(bancos)
})
.then(bancosCreados => {
  console.log(`${bancosCreados.length} users created with the following id:`);
  console.log(bancosCreados.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})


 // {
  //   username: "bob",
  //   password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
  // }