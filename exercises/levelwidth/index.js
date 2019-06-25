// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const s = 's'
    const counters = [0]
    const items = [root, s]

    // If 's' stays alone inside the array, that means we are done.
    while (items.length > 1) {
        let item = items.shift()

        if (item === s) {
            counters.push(0)
            items.push(s)
        }else{
            counters[counters.length - 1]++
            items.push(...item.children)
        }
    }

    return counters
}

module.exports = levelWidth;
