function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      odd.push(arr[i]);
    }
  }

  for (let j = 0; j < odd.length - 1; j++) {
    oddSum = odd[j] + odd[j + 1];
  }

  for (let k = 0; k < odd.length; k++) {
    if (odd[k] < min) {
      min = odd[k];
    }
  }

  console.log(oddSum);

  return (answer = min);
}

arr = [12, 1, 38, 41, 53, 92, 85];
console.log(solution(arr));
