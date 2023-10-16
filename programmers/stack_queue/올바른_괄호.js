function solution(s) {
  let stack = [];

  if (s[0] === ")") return false;

  for (const bracket of s) {
    if (bracket === "(") {
      stack.push(bracket);
    }

    if (bracket === ")" && stack.length === 0) {
      return false;
    } else if (bracket === ")") {
      stack.pop();
    }
  }

  return !stack.length;
}
