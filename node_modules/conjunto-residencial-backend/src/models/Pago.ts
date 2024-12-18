import { 
    Model, 
    DataTypes 
  } from 'sequelize';
  import sequelize from '../config/database';
  import Residente from './Residente';
  
  class Pago extends Model {
    public id!: number;
    public residenteId!: number;
    public monto!: number;
    public fechaPago!: Date;
  }
  
  Pago.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    residenteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'residentes',
        key: 'id'
      }
    },
    monto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    fechaPago: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Pago',
    tableName: 'pagos',
    timestamps: true
  });
  
  export default Pago;