import { IMatchTeams } from './team.interface';

interface ILeaderboard {
  id: number;
  teamName: string;
  matchesHome: IMatchTeams[];
  matchesAway: IMatchTeams[]
}

interface ILeaderboardBoard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

export {
  ILeaderboard,
  ILeaderboardBoard,
};
