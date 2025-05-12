class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.bubbleUp();
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length) {
      this.heap[0] = end;
      this.bubbleDown();
    }
    return min;
  }

  bubbleUp() {
    let idx = this.heap.length - 1;
    const element = this.heap[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.heap[parentIdx];
      if (element >= parent) break;
      this.heap[parentIdx] = element;
      this.heap[idx] = parent;
      idx = parentIdx;
    }
  }

  bubbleDown() {
    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[0];

    while (true) {
      let left = 2 * idx + 1;
      let right = 2 * idx + 2;
      let swap = null;

      if (left < length && this.heap[left] < element) {
        swap = left;
      }
      if (right < length &&
          this.heap[right] < (swap === null ? element : this.heap[left])) {
        swap = right;
      }
      if (swap === null) break;
      this.heap[idx] = this.heap[swap];
      this.heap[swap] = element;
      idx = swap;
    }
  }

  size() {
    return this.heap.length;
  }
}

function mincost(arr) {
  const heap = new MinHeap();
  for (let num of arr) {
    heap.insert(num);
  }

  let cost = 0;
  while (heap.size() > 1) {
    let first = heap.extractMin();
    let second = heap.extractMin();
    let sum = first + second;
    cost += sum;
    heap.insert(sum);
  }

  return cost;
}

function calculateMinCost() {
  const input = document.getElementById("ropeInput").value;
  const lengths = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
  const result = document.getElementById("result");

  if (lengths.length < 2) {
    result.textContent = "Enter at least two rope lengths.";
    result.style.color = "red";
    return;
  }

  const totalCost = mincost(lengths);
  result.textContent = `Minimum cost to connect ropes: ${totalCost}`;
  result.style.color = "green";
}
