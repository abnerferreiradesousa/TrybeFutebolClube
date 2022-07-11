import { Model, STRING, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';

// O que é o exclamação no TS?

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

export default Match;
