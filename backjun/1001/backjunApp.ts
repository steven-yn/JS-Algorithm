const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  const inputList = inputString.split(" ");
  const A = Number(inputList[0]);
  const B = Number(inputList[1]);

  if (A > 0 && B < 10) {
    return A - B;
  }
};

console.log(solution(inputFile));
