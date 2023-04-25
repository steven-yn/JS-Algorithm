const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  const inputValue = inputString.split(" ");

  const hour = Number(inputValue[0]);
  const min = Number(inputValue[1]);

  const minusMin = min - 45;
  const minusHour = minusMin < 0 ? hour - 1 : hour;

  const calcMin = minusMin < 0 ? 60 + minusMin : minusMin;
  const calcHour = minusHour < 0 ? 24 + minusHour : minusHour;

  return `${calcHour} ${calcMin}`;
};

console.log(solution(inputFile)); // 7931
