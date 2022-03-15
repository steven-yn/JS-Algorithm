function solution(str) {
  let answer = '';

  for (let elem of str) {
    if (elem === 'A') {
      elem = '#';
    }
    answer += elem;
  }

  return answer;
}

let str = 'BANANA';
console.log(solution(str), 'sol');
