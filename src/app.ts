function bubbleSort(array: number[]) {
  const lastIndex = array.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

console.log(bubbleSort([123, 456, 1, 2, 312, 4513, 54, 122, 367]));
