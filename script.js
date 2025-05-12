function mincost(arr) {
  if (arr.length <= 1) return 0;

  // Create a min-heap by sorting
  arr.sort((a, b) => a - b);

  let totalCost = 0;

  while (arr.length > 1) {
    // Remove the two smallest ropes
    const first = arr.shift();
    const second = arr.shift();

    const cost = first + second;
    totalCost += cost;

    // Insert the combined rope back in sorted order
    // Simple insert + re-sort to maintain min-heap behavior
    arr.push(cost);
    arr.sort((a, b) => a - b);
  }

  return totalCost;
}
