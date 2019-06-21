// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// First solution.
function chunk(array, size) {
    if (array.length <= size) return [array]

    let chunks = []
    let n = Math.ceil(array.length / size)

    for (let i = 0; i < n; i++) {
        let from = size * i
        let to = from + size

        chunks.push(array.slice(from, to))
    }

    return chunks
}

module.exports = chunk;
