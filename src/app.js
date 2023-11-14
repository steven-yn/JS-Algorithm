class Node {
  constructor(priority) {
    this.priority = priority;
  }
}

class MinHeapQueue {
  enqueue(priority) {
    const node = this.nodePush(priority);
    this.bubbleUp(node, this.store.length - 1);

    return node;
  }

  dequeue(K) {
    if (this.store[0].priority < K) {
      const rootPriority = this.heapPop().priority;
      const nextPriority = this.heapPop().priority;

      const newNode = this.enqueue(rootPriority + nextPriority * 2);

      this.shakeCnt++;

      return newNode;
    }
  }

  bubbleUp(node, index) {
    const parentNodeIndex = this.getParentNodeIndex(index);
    if (parentNodeIndex === -1) return;
    const parentNode = this.store[parentNodeIndex];

    if (node.priority < parentNode.priority) {
      this.store[index] = parentNode;
      this.store[parentNodeIndex] = node;
      this.bubbleUp(parentNode, parentNodeIndex);
    }
  }

  bubbleDown(index) {
    const currentNode = this.store[index];

    const leftChildNodeIndex = this.getChildNodeIndex(index, "LEFT");
    const rightChildNodeIndex = this.getChildNodeIndex(index, "RIGHT");

    if (leftChildNodeIndex === -1 || rightChildNodeIndex === -1) return;

    const leftNode = this.store[leftChildNodeIndex];
    const rightNode = this.store[rightChildNodeIndex];

    const leftSwap = () => {
      this.store[index] = leftNode;
      this.store[leftNode] = currentNode;
      this.bubbleDown(leftChildNodeIndex);
    };

    const rightSwap = () => {
      this.store[index] = rightNode;
      this.store[rightNode] = currentNode;
      this.bubbleDown(rightChildNodeIndex);
    };

    if (!leftNode) return;

    const leftCompare = leftNode.priority < currentNode.priority;

    if (!rightNode && leftCompare) {
      leftSwap();
      return;
    } else if (!rightNode) {
      return;
    }

    const rightCompare = rightNode.priority < currentNode.priority;

    if (leftCompare && rightCompare) {
      if (leftNode.priority < rightNode.priority) {
        leftSwap();
      } else if (rightNode.priority < leftNode.priority) {
        rightSwap();
      } else {
        leftSwap();
      }
    } else if (leftCompare) {
      leftSwap();
    } else if (rightCompare) {
      rightSwap();
    } else {
      leftSwap();
    }
  }
}

function solution(scoville, K) {
  var answer = 0;

  const priorityQueue = new MinHeapQueue(scoville[0]);

  scoville.forEach((scov, index) => {
    if (index === 0) {
      return;
    }
    priorityQueue.enqueue(scov);
  });

  console.log(priorityQueue.store, "priorityQueue");

  while (priorityQueue.store.length > 1) {
    console.log(priorityQueue.store, "priorityQueue.store");
    const scov = priorityQueue.dequeue(K);

    if (scov === null) break;
  }

  if (priorityQueue.store[0].priority < K) {
    answer = -1;
  } else {
    answer = priorityQueue.shakeCnt;
  }

  return answer;
}
