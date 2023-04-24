const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  const inputList = inputString.split("\n");

  return `${Number(inputList[0]) - 543}`;
};

console.log(solution(inputFile)); // 1998
