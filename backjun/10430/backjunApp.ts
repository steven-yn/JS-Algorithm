const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  let result = "";

  const inputList = inputString.split(" ");

  const A = Number(inputList[0]);
  const B = Number(inputList[1]);
  const C = Number(inputList[2]);

  result += `${(A + B) % C}\n`;
  result += `${((A % C) + (B % C)) % C}\n`;
  result += `${(A * B) % C}\n`;
  result += `${((A % C) * (B % C)) % C}`;

  return result;
};

console.log(solution(inputFile));

// 1
// 1
// 0
// 0
