function mincost(arr) {
    // Min heap using simple array with sorting
    let heap = [...arr].sort((a, b) => a - b); // initialize min-heap

    let totalCost = 0;

    while (heap.length > 1) {
        // Always take two smallest ropes
        let first = heap.shift();
        let second = heap.shift();

        let cost = first + second;
        totalCost += cost;

        // Insert the new rope back into the heap
        heap.push(cost);
        heap.sort((a, b) => a - b); // Re-sort to maintain min-heap behavior
    }

    return totalCost;
}

module.exports = mincost;