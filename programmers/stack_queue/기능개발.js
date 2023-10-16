function solution(progresses, speeds) {
  var answer = [];

  let stack = [];

  progresses.forEach((progress, idx) => {
    const currentRestWorkDay = Math.ceil((100 - progress) / speeds[idx]);

    if (stack.length && stack[0][1] < currentRestWorkDay) {
      answer.push(stack.length);
      stack = [];
    }

    if (!stack.length) {
      stack.push([progress, currentRestWorkDay]);
    } else if (stack[0][1] >= currentRestWorkDay) {
      stack.push([progress, currentRestWorkDay]);
    }
  });

  if (stack.length) {
    answer.push(stack.length);
  }

  return answer;
}
