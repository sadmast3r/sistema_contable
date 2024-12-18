import { 
    Model, 
    DataTypes, 
    Association, 
    HasManyGetAssociationsMixin,
    HasManyAddAssociationMixin,
    HasManyCreateAssociationMixin
  } from 'sequelize';
  import sequelize from '../config/database';
  import Torre from 'C:/Users/jolyo/OneDrive/Desktop/Uni/conjunto-residencial/conjunto-residencial/backend/src/models/Torre';
  import Residente from 'C:/Users/jolyo/OneDrive/Desktop/Uni/conjunto-residencial/conjunto-residencial/backend/src/models/Residente';
  
  class Piso extends Model {
    public id!: number;
    public numero!: number;
    public torreId!: number;
  
    // Mixins for associations
    public getResidentes!: HasManyGetAssociationsMixin<Residente>;
    public addResidente!: HasManyAddAssociationMixin<Residente, number>;
    public createResidente!: HasManyCreateAssociationMixin<Residente>;
  
    public readonly residentes?: Residente[];
  
    public static associations: {
      residentes: Association<Piso, Residente>;
    };
  }
  
  Piso.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    torreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'torres',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Piso',
    tableName: 'pisos',
    timestamps: true
  });
  
  export default Piso;