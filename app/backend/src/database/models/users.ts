import { STRING, Model, INTEGER } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

User.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: STRING,
  },
  role: {
    type: STRING,
  },
  email: {
    type: STRING,
  },
  password: {
    type: STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'user',
  timestamps: false,
});

export default User;
