/*
Create a function that takes an array representation of a Minesweeper board, and returns another board where the value of each cell is the amount of its neighbouring mines.

Examples
The input may look like this:

[
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]
The 0 represents an empty space. The 1 represents a mine.

You will have to replace each mine with a 9 and each empty space with the number of adjacent mines, the output will look like this:

[
  [1, 9, 2, 1],
  [2, 3, 9, 2],
  [3, 9, 4, 9],
  [9, 9, 3, 1],
]
Notes
Since in the output the numbers 0-8 are used to determine the amount of adjacent mines, the number 9 will be used to identify the mines instead.
A wikipedia page explaining how Minesweeper works is available in the Resources tab
*/

function countNeighbors(board, i, j, m, n) {
  let count = 0;
  for (let di = -1; di <= 1; di++) {
    for (let dj = -1; dj <= 1; dj++) {
      if (di === 0 && dj === 0) continue;
      const ni = i + di;
      const nj = j + dj;
      if (ni >= 0 && ni < m && nj >= 0 && nj < n && board[ni][nj] === 1) {
        count++;
      }
    }
  }
  return count;
}

function minesweeperNumbers(board) {
  if (
    !Array.isArray(board) ||
    board.length === 0 ||
    !Array.isArray(board[0]) ||
    board[0].length === 0
  )
    return [];
  const m = board.length;
  const n = board[0].length;
  const res = [];
  for (let i = 0; i < m; i++) {
    res[i] = [];
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        res[i][j] = 9;
      } else {
        res[i][j] = countNeighbors(board, i, j, m, n);
      }
    }
  }
  return res;
}

exports.solution = minesweeperNumbers;
