const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productoSchema = new Schema({
  tipo: {
    type: 'String',
    enum: ['Tarjeta de crédito', 'Tarjeta de débito', 'Caja de Ahorro', 'Cuenta Corriente', 'CDA'],
  },
  moneda: {
    type: String,
    enum: ['Gs.', 'Usd.']
  },
  nombre: String,
  descripcion: String,
  datos: [
    {
      saldoPromedio: {
        monto: Number,
        moneda: String
      },
      multaSaldoInferior: {
        monto: Number,
        moneda: String
      },
      extraccionesCajerosPropios: {
        monto: Number,
      },
      extraccionesCajerosOtros: {
        monto: Number,
      },
      costoCajerosPropios: {
        monto: Number,
        moneda: String
      },
      costoCajerosOtros: {
        monto: Number,
        moneda: String
      },
      costoCajerosExterior: String,
      fecha: Date
    }
  ],
  banco: { type: Schema.Types.ObjectId, ref: 'Entidad' }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Producto = mongoose.model('Producto', productoSchema);
module.exports = Producto;
