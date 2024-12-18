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
  
  class Torre extends Model {
    public id!: number;
    public nombre!: string;
    public numeroDePisos!: number;
  
    // Mixins for associations
    public getPisos!: HasManyGetAssociationsMixin<Piso>;
    public addPiso!: HasManyAddAssociationMixin<Piso, number>;
    public createPiso!: HasManyCreateAssociationMixin<Piso>;
  
    public readonly pisos?: Piso[];
  
    public static associations: {
      pisos: Association<Torre, Piso>;
    };
  }
  
  Torre.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    numeroDePisos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 8
    }
  }, {
    sequelize,
    modelName: 'Torre',
    tableName: 'torres',
    timestamps: true
  });
  
  export default Torre;