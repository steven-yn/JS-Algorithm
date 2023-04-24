const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  const line1 = "|\\_/|" + "\n";
  const line2 = "|q p|   /}" + "\n";
  const line3 = '( 0 )"""\\' + "\n";
  const line4 = '|"^"`    |' + "\n";
  const line5 = "||_/=\\\\__|";
  return line1 + line2 + line3 + line4 + line5;
};

console.log(solution(inputFile));
