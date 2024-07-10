// Write a function, compress, that takes in a string as an argument. 
// The function should return a compressed version of the string where 
// consecutive occurrences of the same characters are 
// compressed into the number of occurrences followed by the character. 
// Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'

// declare a function, compress, that takes in a string as arg
// return a compressed version of a string where aa -> 2a
// single character occurences should not be changes t -> t

// use two pointers to iterate through the string and check against the starting pointer
// if both pointers have identical elements then increment
// j - i to store into a variable the number of time that element appears
// check if this number is 1, if so then only push in the letter
// otherwise push in the number and then letter
// use an array for linear time complexity 

const compress = (str) => {

    let i = 0 
    let j = 0
    const result = [];

    while (j <= str.length ) {
        if (str[i] === str[j]) {
            j++
        } else {
            const num = j - i
            if (num === 1) {
                result.push(str[i])
            } else {
                result.push(num, str[i])
            }
           i = j 
        }

    }
    return result.join('')
}

console.log(compress('yyy'))
console.log(compress('bbiinnsskk'))
console.log(compress('ccccccckkkkkkmmmmmsssss'))