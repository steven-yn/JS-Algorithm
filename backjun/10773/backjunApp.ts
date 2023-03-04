// const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";

const fs = require("fs");
let inputFile = fs.readFileSync(__dirname + "/input.txt").toString();

let stack: number[] = [];

const inputList: string[] = inputFile.split("\n");
const limit = inputList[0];
const targetList = inputList.slice(1, inputList.length).map((elem) => {
  elem.split(",").join("");

  return Number(elem);
});

targetList.forEach((target, idx) => {
  if (idx >= Number(limit)) return;

  if (target === 0) {
    stack.pop();
  } else {
    stack.push(target);
  }
});

const sum = stack.length > 0 ? stack.reduce((acc, cur) => acc + cur) : 0;

console.log(sum);
