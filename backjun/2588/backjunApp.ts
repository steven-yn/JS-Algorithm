const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  let result = "";

  const inputList = inputString.split("\n");

  const first = inputList[0];
  const second = inputList[1];

  const splitFirst = first.split("");
  const splitSecond = second.split("");

  let calc3 = 0;
  splitFirst.forEach((elem, idx) => {
    const dec = idx === 0 ? 100 : idx === 1 ? 10 : 1;
    const multi = Number(splitSecond[2]) * Number(elem) * dec;
    calc3 = calc3 + multi;
  });

  let calc4 = 0;
  splitFirst.forEach((elem, idx) => {
    const dec = idx === 0 ? 100 : idx === 1 ? 10 : 1;
    const multi = Number(splitSecond[1]) * Number(elem) * dec;
    calc4 = calc4 + multi;
  });

  let calc5 = 0;
  splitFirst.forEach((elem, idx) => {
    const dec = idx === 0 ? 100 : idx === 1 ? 10 : 1;
    const multi = Number(splitSecond[0]) * Number(elem) * dec;
    calc5 = calc5 + multi;
  });

  result += `${calc3}\n`;
  result += `${calc4}\n`;
  result += `${calc5}\n`;
  result += `${calc3 + calc4 * 10 + calc5 * 100}\n`;

  return result;
};

console.log(solution(inputFile));
// 2360
// 3776
// 1416
// 181720
