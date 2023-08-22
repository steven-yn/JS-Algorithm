function binarySearch(list, target) {
  // add whatever parameters you deem necessary - good luck!
  let leftPointer = 0;
  let rightPointer = list.length - 1;
  let middlePointer = Math.floor((rightPointer + leftPointer) / 2);
  while (
    leftPointer <= rightPointer &&
    leftPointer !== middlePointer &&
    rightPointer !== middlePointer
  ) {
    if (list[middlePointer] === target) {
      return middlePointer;
    } else if (list[leftPointer] === target) {
      return leftPointer;
    } else if (list[rightPointer] === target) {
      return rightPointer;
    }
    if (list[middlePointer] > target) {
      rightPointer = middlePointer;
    } else if (list[middlePointer] < target) {
      leftPointer = middlePointer;
    }
    middlePointer = Math.floor((rightPointer + leftPointer) / 2);
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
