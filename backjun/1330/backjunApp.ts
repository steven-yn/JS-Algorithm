const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  const inputLine = inputString.split(" ");
  const A = Number(inputLine[0]);
  const B = Number(inputLine[1]);

  if (A > B) {
    return ">";
  }

  if (A < B) {
    return "<";
  }

  if (A == B) {
    return "==";
  }
};

console.log(solution(inputFile));
