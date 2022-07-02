function solution(arr) {
  const odd = arr.filter((num) => {
    if (num % 2) {
      return;
      num;
    } else {
      return false;
    }
  });
  const oddSum = odd.reduce((cur, acc) => {
    return cur + acc;
  });
  console.log(oddSum);
  const oddMin = Math.min.apply(null, odd);
  return oddMin;
}
arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
