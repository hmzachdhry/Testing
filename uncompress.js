//Write a function, uncompress, that takes in a string as an argument.
// The input string will be formatted into multiple groups according to the following pattern:
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively
// You may assume that the input string is well-formed according to the previously mentioned pattern.

// <number><char>
// for example, '2c' or '3a' -> cc or aaa

// declare a function uncompress that takes in str as arg
// return uncompressed version of str
// use two pointers to iterate through string
// one pointer if responsible for checking if there is a number
// the other is used as a starting point of the number
// declare a variable wih all numbes to check against str
// declare a variable to convert string to number and iterate through num times
// num times will be the value of how many elements are printed

const uncompress = (str) => {
  let i = 0;
  let j = 0;
  let result = []; // better time complexity using an array then converting to str on return
  const numbers = '0123456789';

  while (j < str.length) {
    if (numbers.includes(str[j])) {
      j++;
    } else {
      const num = Number(str.slice(i, j));
      for (let count = 0; count < num; count++) {
        result.push(str[j]);
      }
      j++
      i = j;
    }
  }
  return result.join('');
};

console.log(uncompress('127y'))
console.log(uncompress('4b'))