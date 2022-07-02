function solution(str1, str2) {
  const regex = new RegExp(str2, 'g');
  let answer = str1.match(regex);

  return answer.length;
}

let str1 = 'COMPUTERPROGRAMMING';
let str2 = 'R';

console.log(solution(str1, str2));
