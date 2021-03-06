// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// First solution.
/*
function fib(n) {

    let ac = []

    for (let i = 0; i < n+1; i++) {
        if (i == 0 || i == 1) {
            ac.push(i)
        }else{
            ac.push(ac[i-2]+ac[i-1])
        }
    }

    return ac[n]
}*/
/*
// Second solution.
function fib(n, i = 2, ac = [0, 1]) {
    ac.push(ac[i-2] + ac[i-1])

    if (i < n+1) {
        i++
        fib(n, i, ac)
    }

    return ac[n]
}

// Third solution. THIS IS NOT VERY FUNCTIONAL. EXPONENTIAL Time.
function fib(n) {
    if (n < 2) {
        return n
    }

    return fib(n-1) + fib(n-2)
}

// Forth solution (OK With Memoization).
Memoization is about caching function results.
*/

function memoize(fn) {
    const cache = {}
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args)
        cache[args] = result
        return result
    }
}

function slowFib(n) {
    if (n < 2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

const fib = memoize(slowFib)
module.exports = fib;
