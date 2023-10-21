class PriorityNode {
  value: any;
  priority: number;
  constructor(value: any, priority: number) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  heap: PriorityNode[];
  constructor() {
    this.heap = [];
  }

  getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  getChildIndex(index: number, mode: "LEFT" | "RIGHT") {
    if (mode === "LEFT") return 2 * index + 1;
    return 2 * index + 2;
  }

  enqueue(value: any, priority: number) {
    this.heap.push(new PriorityNode(value, priority));
    this.bubbleUp(this.heap.length - 1);
    return this.heap;
  }

  bubbleUp(index: number) {
    if (index === 0) return;

    const parentIndex = this.getParentIndex(index);
    const targetNode = this.heap[index];

    if (this.heap[index].priority < this.heap[parentIndex].priority) {
      this.heap[index] = this.heap[parentIndex];
      this.heap[parentIndex] = targetNode;
      this.bubbleUp(parentIndex);
    }

    return targetNode;
  }

  dequeue(test?: boolean) {
    const originRoot = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = originRoot;
    this.heap.pop();
    this.bubbleDown(0, test);

    return originRoot;
  }

  bubbleDown(index: number, test?: boolean) {
    const currentNode = this.heap[index];

    if (this.heap.length <= 1) return currentNode;
    if (this.heap.length - 1 === index) return currentNode;

    const leftChildIndex = this.getChildIndex(index, "LEFT");
    const rightChildIndex = this.getChildIndex(index, "RIGHT");

    const leftNode = this.heap[leftChildIndex];
    const rightNode = this.heap[rightChildIndex];

    const leftSwap = () => {
      this.heap[index] = leftNode;
      this.heap[leftChildIndex] = currentNode;

      this.bubbleDown(leftChildIndex);
    };

    const rightSwap = () => {
      this.heap[index] = rightNode;
      this.heap[rightChildIndex] = currentNode;

      this.bubbleDown(rightChildIndex);
    };

    if (rightChildIndex >= this.heap.length) {
      if (leftNode && leftNode.priority < currentNode.priority) leftSwap();

      return currentNode;
    }

    if (
      leftNode.priority < currentNode.priority &&
      rightNode.priority < currentNode.priority
    ) {
      if (leftNode.priority < rightNode.priority) {
        leftSwap();
      } else if (rightNode.priority < leftNode.priority) {
        rightSwap();
      } else {
        leftSwap();
      }
    } else if (leftNode.priority < currentNode.priority) {
      leftSwap();
    } else if (rightNode.priority < currentNode.priority) {
      rightSwap();
    } else {
      leftSwap();
    }
  }
}

const queue = new PriorityQueue();

queue.enqueue("common cold", 5);
queue.enqueue("glass in foot", 3);
queue.enqueue("gunshot wound", 1);
queue.enqueue("glass in foot", 3);
queue.enqueue("high fever", 4);
queue.enqueue("glass in foot", 3);
queue.enqueue("broken arm", 2);
queue.enqueue("glass in foot", 3);

console.log(queue.heap);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.heap);
