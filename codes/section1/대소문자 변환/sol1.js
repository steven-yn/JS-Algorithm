function solution(str) {
  let answer = '';

  for (let elem of str) {
    if (elem === elem.toUpperCase()) {
      answer += elem.toLowerCase();
    } else {
      answer += elem.toUpperCase();
    }
  }
  return answer;
}

let str = 'StuDY';
console.log(solution(str));
