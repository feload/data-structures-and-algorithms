// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// First solution.
function pyramid(n) {
    let levels = Array(n*2)
            .fill(1)
            .map((e, idx) => e+idx)
            .filter(i => i%2 != 0)

    levels.forEach((lvl) => {
        const sideSpace = (levels[levels.length-1]-lvl)/2
        console.log([
            ...Array(sideSpace).fill(' ', 0, sideSpace),
            ...Array(lvl).fill('#', 0, lvl),
            ...Array(sideSpace).fill(' ', 0, sideSpace)
        ].join(''))
    })

}

module.exports = pyramid;
