import Torre from './Torre';
import Piso from './Piso';
import Residente from './Residente';
import Pago from './Pago';

// Definir asociaciones
Torre.hasMany(Piso, {
  foreignKey: 'torreId',
  as: 'pisos'
});
Piso.belongsTo(Torre, {
  foreignKey: 'torreId',
  as: 'torre'
});

Piso.hasMany(Residente, {
  foreignKey: 'pisoId',
  as: 'residentes'
});
Residente.belongsTo(Piso, {
  foreignKey: 'pisoId',
  as: 'piso'
});

Residente.hasMany(Pago, {
  foreignKey: 'residenteId',
  as: 'pagos'
});
Pago.belongsTo(Residente, {
  foreignKey: 'residenteId',
  as: 'residente'
});

export { Torre, Piso, Residente, Pago };