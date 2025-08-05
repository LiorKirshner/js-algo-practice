/*
What's the Missing Letter?
Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter".

Examples
missingLetter("abdefg") ➞ "c"

missingLetter("mnopqs") ➞ "r"

missingLetter("tuvxyz") ➞ "w"

missingLetter("ghijklmno") ➞ "No Missing Letter"
Notes
The given string will never have more than one missing letter.
*/

function missingLetter(string) {
  for (let i = 0; i < string.length - 1; i++) {
    const current = string.charCodeAt(i);
    const next = string.charCodeAt(i + 1);

    if (next - current > 1) {
      return String.fromCharCode(current + 1);
    }
  }
  return "No Missing Letter";
}

exports.solution = missingLetter;
