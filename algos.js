// iterate through the array of numbers
// store the numbers within an object - key/value pair = number: index
// check the complement of the targetSum to see if that number exists in the object
// if so it means that there is a pair of numbers that equals the sum. return the indices
// if not, store the number into the object with its index and move onto the next iteration

const pairSum = (numbers, targetSum) => {
  const previousNums = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetSum - num;

    if (complement in previousNums) {
      return [i, previousNums[complement]];
    }
    previousNums[num] = i;
  }
};

console.log(pairSum([4, 7, 9, 2, 5, 1], 3));


