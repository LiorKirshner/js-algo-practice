/*
A maze can be represented by a 2D matrix, where 0s represent walkeable areas, and 1s represent walls. You start on the upper left corner and the exit is on the most lower right cell.

Create a function that returns true if you can walk from one end of the maze to the other. You can only move up, down, left and right. You cannot move diagonally.

Examples
canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 0]
]) ➞ true

canExit([
  [0, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 0, 1],
  [1, 1, 0, 0, 1, 1, 1]
]) ➞ false

// This maze only has dead ends!

canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1]
]) ➞ false

// Exit only one block away, but unreachable!

canExit([
  [0, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 0]
]) ➞ true
Notes
In a maze of size m x n, you enter at [0, 0] and exit at [m-1, n-1].
There can be dead ends in a maze - one exit path is sufficient.
*/

function canExit(mat, i = 0, j = 0) {
  let m = mat.length - 1;
  let n = mat[0].length - 1;

  // Check bounds and walls
  if (i < 0 || i > m || j < 0 || j > n || mat[i][j] !== 0) return false;

  // Reached the exit
  if (i === m && j === n) return true;

  // Mark as visited to prevent infinite loops
  mat[i][j] = 2;

  // Try all four directions
  const result =
    canExit(mat, i + 1, j) || // down
    canExit(mat, i - 1, j) || // up
    canExit(mat, i, j + 1) || // right
    canExit(mat, i, j - 1); // left

  // Restore original value (backtracking)
  mat[i][j] = 0;

  return result;
}

exports.solution = canExit;
