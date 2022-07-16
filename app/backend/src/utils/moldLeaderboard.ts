import { ILeaderboard } from '../interfaces/leaderboard.interface';
import calcEfficiency from './calcEfficiency';
import countResultOfMatchs from './countResultOfMatchs';
import countGoals from './countGoals';

const moldLeaderboard = ({ teamName, matchesHome }: ILeaderboard) => {
  const [victoriesHome, drawsHome, lossesHome, pointsHome] = countResultOfMatchs(matchesHome);
  // const [victoriesAway, drawsAway, lossesAway, pointsAway] = countResultOfMatchs(matchesAway);
  const [goalsFavorHome, goalsOwnHome, goalsBalanceHome] = countGoals(matchesHome);
  // const [goalsFavorAway, goalsOwnAway, goalsBalanceAway] = countGoals(matchesAway);
  const efficiency = calcEfficiency(
    pointsHome,
    matchesHome.length,
  );

  return {
    name: teamName,
    totalPoints: pointsHome,
    totalGames: matchesHome.length,
    totalVictories: victoriesHome,
    totalDraws: drawsHome,
    totalLosses: lossesHome,
    goalsFavor: goalsFavorHome,
    goalsOwn: goalsOwnHome,
    goalsBalance: goalsBalanceHome,
    efficiency: Number(efficiency.toFixed(2)),
  };
};

export default moldLeaderboard;
