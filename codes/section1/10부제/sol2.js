function solution(date, arr) {
  let answer = 0;

  for (let elem of arr) {
    if (date === elem % 10) {
      answer += 1;
    }
  }
  return answer;
}

const date = 3;
const arr = [25, 23, 11, 47, 53, 17, 33];

console.log(solution(date, arr));
