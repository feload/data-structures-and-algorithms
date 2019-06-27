// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

    for(let i = 0; i < arr.length; i++){
        for (j = 0; j < arr.length - i; j++){
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }

    return arr

}

function selectionSort(arr) {

    let minIdx;
    for (let i = 0; i < arr.length; i++){
        minIdx = i
        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[minIdx]) {
                minIdx = j
            }
        }
        if (arr[i] != arr[minIdx]) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]
        }
    }
    return arr

}

function mergeSort(arr) {

    if (arr.length == 1) {
        return arr
    }

    let [left, right] = [arr.slice(0, Math.round(arr.length / 2)), arr.slice(Math.round(arr.length / 2))]

    return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right) {
    const results = [];

    while (left.length && right.length) {

        let li = left[0];
        let ri = right[0];

        if (li < ri) {
            results.push(left.shift())
        }else{
            results.push(right.shift())
        }
    }

    if (left.length) {
        results.push(...left)
    }

    if (right.length) {
        results.push(...right)
    }

    return results;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
