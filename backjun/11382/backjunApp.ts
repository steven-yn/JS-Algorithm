const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  const inputList = inputString.split(" ");

  return `${
    Number(inputList[0]) + Number(inputList[1]) + Number(inputList[2])
  }`;
};

console.log(solution(inputFile)); // 7931
