class ProrityQueue {
  minHeap = [];

  size() {
    return this.minHeap.length;
  }

  swap(index1, index2) {
    [this.minHeap[index1], this.minHeap[index2]] = [
      this.minHeap[index2],
      this.minHeap[index1],
    ];
    return this.minHeap;
  }

  getChildIndex(index, direction) {
    if (direction === "RIGHT") return 2 * index + 2;
    return 2 * index + 1;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  enqueue(priority) {
    this.minHeap.push(priority);
    this.bubbleUp(this.size() - 1);
    return this.minHeap;
  }

  dequeue() {
    const size = this.size();
    if (size === 0) return null;
    if (size === 1) return this.minHeap.pop();

    const originRoot = this.minHeap[0];
    this.minHeap[0] = this.minHeap.pop();

    this.bubbleDown(0);

    return originRoot;
  }

  bubbleUp(index) {
    const parentIndex = this.getParentIndex(index);

    const currentNode = this.minHeap[index];
    const parentNode = this.minHeap[parentIndex];

    if (currentNode < parentNode) {
      this.swap(index, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }

  bubbleDown(index) {
    const currentNode = this.minHeap[index];
    if (this.size() <= 1) return currentNode;
    // if (this.size() - 1 === index) return currentNode;

    const leftChildIndex = this.getChildIndex(index, "LEFT");
    const rightChildIndex = this.getChildIndex(index, "RIGHT");

    const leftNode = this.minHeap[leftChildIndex];
    const rightNode = this.minHeap[rightChildIndex];
    const leftSwap = () => {
      this.swap(index, leftChildIndex);
      this.bubbleDown(leftChildIndex);
    };

    const rightSwap = () => {
      this.swap(index, rightChildIndex);
      this.bubbleDown(rightChildIndex);
    };

    if (typeof leftNode === "undefined") return currentNode;
    if (leftNode && typeof rightNode === "undefined" && leftNode < currentNode)
      return leftSwap();

    const leftCompare = leftNode < currentNode;
    const rightCompare = rightNode < currentNode;

    if (leftCompare && rightCompare) {
      if (leftNode < rightNode) {
        leftSwap();
      } else if (rightNode < leftNode) {
        rightSwap();
      } else if (leftNode === rightNode) {
        leftSwap();
      }
    } else if (leftCompare) {
      leftSwap();
    } else if (rightCompare) {
      rightSwap();
    }
  }
}

function solution(scoville, K) {
  let shakeCnt = 0;

  const priorityQueue = new ProrityQueue();

  scoville.forEach((scov) => {
    priorityQueue.enqueue(scov);
  });

  while (priorityQueue.minHeap[0] < K && priorityQueue.size() > 1) {
    shakeCnt++;
    const first = priorityQueue.dequeue();
    const second = priorityQueue.dequeue();
    priorityQueue.enqueue(first + second * 2);
  }

  return priorityQueue.minHeap[0] >= K ? shakeCnt : -1;
}

// console.log(solution([0, 0, 0, 100], 201));
