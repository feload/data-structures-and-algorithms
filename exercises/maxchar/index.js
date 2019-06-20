// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// First solution.
/*
function maxChar(str) {
    let maxchar = null;
    let maxcharCount = 0;

    [...new Set(str.split(''))]
    .forEach(c => {
        const count = str.match(new RegExp(c, 'g')).length
        if (maxcharCount < count){
            maxcharCount = count
            maxchar = c
        }
    });

    return maxchar
}
*/

// Second solution.
/*
function maxChar(str) {
    const reg = {}
    str.split('').forEach(e => {
        reg[e] = reg[e] + 1 || 1;
    });

    return Object.keys(reg)
        .map(e => {
            return {
                l: e, c: reg[e]
            }
        })
        .sort((a, b) => b.c - a.c)[0].l
}
*/

// Third solution. (Theirs)
function maxChar(str){
    const charMap = {}
    for (let char of str){
        if (charMap[char]) {
            charMap[char]++;
        }else{
            charMap[char] = 1;
        }
    }

    let max = 0
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

module.exports = maxChar;
