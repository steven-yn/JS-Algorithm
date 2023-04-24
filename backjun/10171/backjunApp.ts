const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  const line1 = `\\    /\\` + "\n";
  const line2 = ` )  ( ')` + "\n";
  const line3 = `(  /  )` + "\n";
  const line4 = ` \\(__)|`;
  return line1 + line2 + line3 + line4;
};

console.log(solution(inputFile));
