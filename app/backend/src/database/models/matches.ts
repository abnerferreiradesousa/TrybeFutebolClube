import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Team from './teams';

// O que é o exclamação no TS?

// Tem como rodar mongoDb no docker?

// O que está linkando a tabela teams com a tabela matches?

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

class Match extends Model {
  id!: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

Match.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  homeTeam: {
    type: INTEGER,
    field: 'home_team',
  },
  homeTeamGoals: {
    type: INTEGER,
    field: 'home_team_goals',
  },
  awayTeam: {
    type: INTEGER,
    field: 'away_team',
  },
  awayTeamGoals: {
    type: INTEGER,
    field: 'away_team_goals',
  },
  inProgress: {
    type: BOOLEAN,
    field: 'in_progress',
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'match',
  timestamps: false,
});

// P q hasOne ao invés belongsTo?

Match.belongsTo(Team, { foreignKey: 'homeTeam', as: 'teamHome' });
Match.belongsTo(Team, { foreignKey: 'awayTeam', as: 'teamAway' });

// Team.belongsTo(Match, { foreignKey: 'homeTeam', as: 'teamHome' });
// Team.belongsTo(Match, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Match;
