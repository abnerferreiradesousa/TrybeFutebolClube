import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
// import Match from './matches';

class Team extends Model {
  id: number;
  teamName: string;
}

Team.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  teamName: {
    type: STRING,
    field: 'team_name',
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'team',
  timestamps: false,
});

// belongsTo testar no arquivo teams
// hasOne arquivo matches
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Team;
