const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  const score = Number(inputString);

  if (score >= 90 && score <= 100) {
    return "A";
  }
  if (score >= 80 && score <= 89) {
    return "B";
  }
  if (score >= 70 && score <= 79) {
    return "C";
  }
  if (score >= 60 && score <= 69) {
    return "D";
  }
  return "F";
};

console.log(solution(inputFile));
