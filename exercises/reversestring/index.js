// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
// First solution
function reverse(str) {
    return str.split('').reverse().join('')
}
*/

/*
// Second solution
function reverse(str) {
    let reversed = ""

    for (letter of str) {
        reversed = letter+reversed
    }

    return reversed
}
*/

// Third solution
function reverse(str) {
    return str.split('').reduce((rev,char) => char + rev)
}

module.exports = reverse;

/**
 *
// Second solution
function reverse(str) {

    // Run debugger mode: node inspect index.js
    debugger

    let reversed = ""

    for (letter of str) {
        reversed = letter+reversed
    }

    return reversed
}

reverse('abcd')

*/