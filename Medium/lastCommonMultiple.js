/*
Write a function that returns the least common multiple (LCM) of two integers.

Examples
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187
Notes
Both values will be positive.
The LCM is the smallest positive integer that is evenly divisible by both a and b.
*/

function lastCommonMultiple(num1, num2) {
  // פונקציה למציאת המחלק המשותף הגדול ביותר (GCD)
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // חישוב LCM
  return (num1 * num2) / gcd(num1, num2);
}

exports.solution = lastCommonMultiple;
