import { 
    Model, 
    DataTypes, 
    Association, 
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyCreateAssociationMixin
  } from 'sequelize';
  import sequelize from '../config/database';
  import Piso from 'C:/Users/jolyo/OneDrive/Desktop/Uni/conjunto-residencial/conjunto-residencial/backend/src/models/Piso';
  import Pago from 'C:/Users/jolyo/OneDrive/Desktop/Uni/conjunto-residencial/conjunto-residencial/backend/src/models/Pago';
  
  class Residente extends Model {
    public id!: number;
    public nombre!: string;
    public apartamento!: string;
    public pisoId!: number;
    public telefono!: string;
    public correo!: string;
    public estadoPago!: 'pendiente' | 'pagado';
  
    // Mixins for associations
    public getPagos!: HasManyGetAssociationsMixin<Pago>;
    public addPago!: HasManyAddAssociationMixin<Pago, number>;
    public createPago!: HasManyCreateAssociationMixin<Pago>;
  
    public readonly pagos?: Pago[];
  
    public static associations: {
      pagos: Association<Residente, Pago>;
    };
  }
  
  Residente.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    apartamento: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    pisoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pisos',
        key: 'id'
      }
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    estadoPago: {
      type: DataTypes.ENUM('pendiente', 'pagado'),
      defaultValue: 'pendiente'
    }
  }, {
    sequelize,
    modelName: 'Residente',
    tableName: 'residentes',
    timestamps: true
  });
  
  export default Residente;