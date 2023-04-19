const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  const inputList = inputString.split(" ");
  const A = Number(inputList[0]);
  const B = Number(inputList[1]);
  let result = "";

  if (A >= 1 && B <= 10000) {
    result += `${(A + B).toString()}\n`;
    result += `${(A - B).toString()}\n`;
    result += `${(A * B).toString()}\n`;
    result += `${Math.floor(A / B).toString()}\n`;
    result += `${(A % B).toString()}`;

    return result;
  }
};

console.log(solution(inputFile));
