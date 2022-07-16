import { ILeaderboardBoard } from '../interfaces/leaderboard.interface';

const orderLeaderboard = (a: ILeaderboardBoard, b:ILeaderboardBoard) => {
  if (a.totalPoints < b.totalPoints) { return 1; }
  if (a.totalPoints > b.totalPoints) { return -1; }
  if (a.totalVictories < b.totalVictories) { return 1; }
  if (a.totalVictories > b.totalVictories) { return -1; }
  if (a.goalsBalance < b.goalsBalance) { return 1; }
  if (a.goalsBalance > b.goalsBalance) { return -1; }
  if (a.goalsFavor < b.goalsFavor) { return 1; }
  if (a.goalsFavor > b.goalsFavor) { return -1; }
  if (a.goalsOwn < b.goalsOwn) { return 1; }
  if (a.goalsOwn > b.goalsOwn) { return -1; }
  return 0;
};

export default orderLeaderboard;
