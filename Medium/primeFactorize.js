/*
Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.

Examples
primeFactorize(25) ➞ [5, 5]

primeFactorize(19) ➞ [19]

primeFactorize(77) ➞ [7, 11]
Notes
Output array must be sorted in ascending order
The only positive integer which is neither prime nor composite is 1. Return an empty array if 1 is the input.
*/

function primeFactorize(num) {
  if (num === 1) return [];

  let primeArr = [];

  // מחלק ב-2
  while (num % 2 === 0) {
    primeArr.push(2);
    num = num / 2;
  }

  for (let i = 3; i * i <= num; i += 2) {
    while (num % i === 0) {
      primeArr.push(i);
      num = num / i;
    }
  }

  if (num > 1) {
    primeArr.push(num);
  }

  return primeArr;
}

exports.solution = primeFactorize;
