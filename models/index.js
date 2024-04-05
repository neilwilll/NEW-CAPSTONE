import { DataTypes, Model} from 'sequelize';
import util from 'util';
import { db } from '../config/db.js';

export class Jersey extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Jersey.init({
  jerseyId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  modelName: 'jersey',
  sequelize: db,
});