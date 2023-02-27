const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs.readFileSync(__dirname + filePath).toString();

function solution(sample: string) {
  const sampleList = sample.split("\n");
  let listIdx = 0;
  let stack: string[] = [];
  let result = "";

  if (typeof Number(sampleList[0]) === "number") {
    listIdx = Number(sampleList[0]);
  }

  sampleList.forEach((temp, idx) => {
    if (idx <= 0) return;

    if (temp.length < 2 || temp.length > 50) return;

    for (const vps of temp) {
      if (stack.length > 0 && stack[stack.length - 1] === "(" && vps === ")") {
        stack.pop();
      } else {
        stack.push(vps);
      }
    }

    if (stack.length > 0) {
      if (idx === listIdx) {
        result += "NO";
        stack = [];
      } else {
        result += "NO\n";
        stack = [];
      }
    } else {
      if (idx === listIdx) {
        result += "YES";
        stack = [];
      } else {
        result += "YES\n";
        stack = [];
      }
    }
  });

  return result;
}

console.log(solution(input));
