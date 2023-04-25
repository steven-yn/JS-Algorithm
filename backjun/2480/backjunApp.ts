const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  const inputValues = inputString.trim().split(" ");

  const dice1 = Number(inputValues[0]);
  const dice2 = Number(inputValues[1]);
  const dice3 = Number(inputValues[2]);

  const isTripleDice = dice1 + dice2 + dice3 === dice1 * 3;

  if (isTripleDice) {
    return `${10000 + dice1 * 1000}`;
  }

  const isDoubleDice = dice1 === dice2 || dice1 === dice3 || dice2 === dice3;

  if (isDoubleDice) {
    const isDice1 = dice1 - dice2 === 0 || dice1 - dice3 === 0;

    return isDice1 ? `${1000 + dice1 * 100}` : `${1000 + dice2 * 100}`;
  }

  const temp = dice1 - dice2 > 0 ? dice1 : dice2;
  const whatIsBig = temp - dice3 > 0 ? temp : dice3;

  return `${whatIsBig * 100}`;
};

console.log(solution(inputFile)); // 7931
