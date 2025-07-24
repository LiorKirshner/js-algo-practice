/*
Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.
How to Calculate Points and Goal Difference
team = {name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
Examples
champions([
 {
 name: "Manchester United",
 wins: 30,
 loss: 3,
 draws: 5,
 scored: 88,
 conceded: 20,
 },
 {
 name: "Arsenal",
 wins: 24,
 loss: 6,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
 {
 name: "Chelsea",
 wins: 22,
 loss: 8,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
])
➞ "Manchester United"
*/
//Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
function champions(clubs) {
  let topClub = clubs[0];
  let topPoints = topClub.wins * 3 + topClub.draws;
  let topGoalDiff = topClub.scored - topClub.conceded;

  for (let club of clubs) {
    let points = club.wins * 3 + club.draws;
    let goalDiff = club.scored - club.conceded;

    if (
      points > topPoints ||
      (points === topPoints && goalDiff > topGoalDiff)
    ) {
      topClub = club;
      topPoints = points;
      topGoalDiff = goalDiff;
    }
  }
  console.log(topClub.name);
  return topClub.name;
}

const teams = [
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  { name: "Arsenal", wins: 24, loss: 6, draws: 8, scored: 98, conceded: 29 },
  { name: "Chelsea", wins: 22, loss: 8, draws: 8, scored: 98, conceded: 29 },
];

console.log(champions(teams));

exports.solution = champions;
