function solution(nums) {
  let answer = 0;
  const uniqueNumbers = new Set(nums);
  const halfLength = nums.length / 2;

  if (uniqueNumbers.size > halfLength) {
    answer = halfLength;
  } else {
    answer = uniqueNumbers.size;
  }

  return answer;
}
