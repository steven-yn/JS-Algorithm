const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const solution = (inputString: string) => {
  const inputLine = inputString.trim().split("\n");

  const startTimeList = inputLine[0].split(" ");

  const startHour = Number(startTimeList[0]);
  const startMin = Number(startTimeList[1]);

  const cookTime = Number(inputLine[1]);
  const cookHour = Math.floor(cookTime / 60);
  const cookMin = Math.floor(cookTime % 60);

  const plusMin = startMin + cookMin;

  const plusHour =
    plusMin > 59
      ? startHour + cookHour + Math.floor(plusMin / 60)
      : startHour + cookHour;

  const calcHour = plusHour > 23 ? plusHour - 24 : plusHour;
  const calcMin = plusMin > 59 ? plusMin - 60 : plusMin;

  return `${calcHour} ${calcMin}`;
};

console.log(solution(inputFile)); // 7931
