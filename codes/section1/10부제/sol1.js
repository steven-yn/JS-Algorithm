function solution(date, arr) {
  let answer = 0;

  for (let elem of arr) {
    for (let i = 0; i < 10; i++) {
      if (elem === date + i * 10) {
        answer += 1;
      }
    }
  }
  return answer;
}

const date = 0;
const arr = [12, 20, 54, 30, 87, 91, 30];

console.log(solution(date, arr));
