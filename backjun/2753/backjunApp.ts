const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  const year = Number(inputString);

  const is4 = year % 4 === 0;
  const isNone100 = year % 100 !== 0;
  const is400 = year % 400 === 0;

  if (is4 && is400) {
    return "1";
  }

  if (is4 && isNone100) {
    return "1";
  }

  return "0";
};

console.log(solution(inputFile));
