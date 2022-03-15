function solution(str) {
  let answer = 0;

  for (let elem of str) {
    if (elem.toUpperCase() === elem) {
      answer++;
    }
  }

  return answer;
}

let str = 'KoreaTimeGood';

console.log(solution(str));
