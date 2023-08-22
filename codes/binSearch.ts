function binarySearch(list: number[] | string[], target: number | string) {
  let leftPointer = 0;
  let rightPointer = list.length - 1;
  let middlePointer = Math.floor((rightPointer + leftPointer) / 2);

  while (
    list[leftPointer] !== target &&
    list[middlePointer] !== target &&
    list[rightPointer] !== target &&
    leftPointer <= rightPointer &&
    middlePointer !== leftPointer &&
    middlePointer !== rightPointer
  ) {
    if (list[middlePointer] > target) {
      rightPointer = middlePointer - 1;
    } else if (list[middlePointer] < target) {
      leftPointer = middlePointer + 1;
    }

    middlePointer = Math.floor((rightPointer + leftPointer) / 2);
  }

  if (list[middlePointer] === target) {
    return middlePointer;
  } else if (list[leftPointer] === target) {
    return leftPointer;
  } else if (list[rightPointer] === target) {
    return rightPointer;
  }

  return -1;
}

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     10
//   )
// ); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     100
//   )
// ); // -1
