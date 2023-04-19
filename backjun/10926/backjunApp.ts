const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  const inputList = inputString.split("\n");

  if (
    inputList[0] &&
    (inputList[0].length < 50 || !inputList[0].match(/[A-Z]/))
  ) {
    return `${inputList[0]}??!`;
  }
};

console.log(solution(inputFile));
