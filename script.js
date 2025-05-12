function mincost(arr) {
  if (arr.length <= 1) return 0;

  // Min Heap using a priority queue
  const minHeap = [...arr];
  minHeap.sort((a, b) => a - b);

  let cost = 0;

  while (minHeap.length > 1) {
    const first = minHeap.shift();
    const second = minHeap.shift();
    const currentCost = first + second;
    cost += currentCost;

    // Insert back in sorted order
    minHeap.push(currentCost);
    minHeap.sort((a, b) => a - b);
  }

  return cost;
}

function calculateMinCost() {
  const input = document.getElementById("ropeInput").value;
  const arr = input.split(',').map(Number).filter(n => !isNaN(n) && n > 0);
  
  if (arr.length === 0) {
    document.getElementById("result").textContent = "Please enter valid rope lengths.";
    return;
  }

  const result = mincost(arr);
  document.getElementById("result").textContent = `Minimum cost to connect ropes: ${result}`;
}
