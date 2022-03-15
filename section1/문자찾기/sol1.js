function solution(str1, str2) {
  let answer = 0;

  for (let elem of str1) {
    if (elem === str2) {
      answer++;
    }
  }

  return answer;
}

let str1 = 'COMPUTERPROGRAMMING';
let str2 = 'R';

console.log(solution(str1, str2));
