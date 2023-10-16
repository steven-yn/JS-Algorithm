function solution(arr) {
  var answer = [];

  arr.forEach((elem, idx) => {
    answer.push(elem);

    if (arr[idx - 1] === elem) {
      answer.pop();
    }
  });

  return answer;
}
