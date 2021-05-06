const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const entidadSchema = new Schema({
  nombre: String,
  logo: String,
  telefono: String,
  email: String,
  descripcion: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Entidad = mongoose.model('Entidad', entidadSchema);
module.exports = Entidad;
