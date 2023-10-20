class MaxBinaryHeap {
  values: number[];
  constructor() {
    this.values = [];
  }

  getChildIndex(index: number, direction: "LEFT" | "RIGHT") {
    if (direction === "LEFT") return 2 * index + 1;
    return 2 * index + 2;
  }

  getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  insert(value: number) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);

    return this;
  }

  bubbleUp(newIndex: number) {
    if (newIndex === 0) return;

    let parentIndex = this.getParentIndex(newIndex);

    const newValue = this.values[newIndex];
    const parentValue = this.values[parentIndex];

    if (newValue > parentValue) {
      this.values[parentIndex] = newValue;
      this.values[newIndex] = parentValue;
      this.bubbleUp(parentIndex);
    }

    return;
  }

  remove() {
    const originRoot = this.values[0];
    const lastValue = this.values[this.values.length - 1];
    this.values[0] = lastValue;
    this.values.pop();

    this.bubbleDown(0);

    return originRoot;
  }

  bubbleDown(newIndex: number) {
    const targetValue = this.values[newIndex];
    const leftChildIndex = this.getChildIndex(newIndex, "LEFT");
    const rightChildIndex = this.getChildIndex(newIndex, "RIGHT");

    if (leftChildIndex === 0 || rightChildIndex === 0) return;

    const leftChild = this.values[leftChildIndex];
    const rightChild = this.values[rightChildIndex];

    if (
      this.values[newIndex] < leftChild &&
      this.values[newIndex] < rightChild
    ) {
      if (leftChild > rightChild) {
        this.values[newIndex] = leftChild;
        this.values[leftChildIndex] = targetValue;

        this.bubbleDown(leftChildIndex);
      } else if (rightChild > leftChild) {
        this.values[newIndex] = rightChild;
        this.values[rightChildIndex] = targetValue;

        this.bubbleDown(rightChildIndex);
      }
    } else if (this.values[newIndex] < leftChild) {
      this.values[newIndex] = leftChild;
      this.values[leftChildIndex] = targetValue;

      this.bubbleDown(leftChildIndex);
    } else if (this.values[newIndex] < rightChild) {
      this.values[newIndex] = rightChild;
      this.values[rightChildIndex] = targetValue;

      this.bubbleDown(rightChildIndex);
    }

    return targetValue;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);
console.log(heap.remove(), "extract");
console.log(heap.remove(), "extract");
console.log(heap.remove(), "extract");
console.log(heap.remove(), "extract");
console.log(heap.remove(), "extract");
console.log(heap.remove(), "extract");
console.log(heap.remove(), "extract");
console.log(heap.remove(), "extract");
console.log(heap);
