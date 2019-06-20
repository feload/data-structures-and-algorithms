// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// first solution
function fizzBuzz(n) {

    const fizz = 3
    const fizzStr = 'fizz'
    const buzz = 5
    const buzzStr = 'buzz'

    for (let i = 1; i < n + 1; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            console.log(fizzStr+buzzStr)
        }else if (i % fizz == 0) {
            console.log(fizzStr)
        }else if (i % buzz == 0) {
            console.log(buzzStr)
        }else{
            console.log(i)
        }
    }

}

module.exports = fizzBuzz;
