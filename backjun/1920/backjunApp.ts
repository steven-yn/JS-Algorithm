const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

let result = "";
const inputList = inputFile.split("\n");

const lengthA = Number(inputList[0]);
const lengthB = Number(inputList[2]);

const listA = inputList[1].slice(0, lengthA + lengthA - 1).split(" ");
const listB = inputList[3].slice(0, lengthB + lengthB - 1).split(" ");

const mid = (0 + lengthA - 1) / 2;

// 11, mid = 5

let idx = 0;

const check = () => {
  let p1 = 0;
  let p2 = Number.isInteger(mid) ? mid : Math.floor(mid) - 1;
  let p3 = Number.isInteger(mid) ? mid : Math.floor(mid);
  let p4 = lengthA - 1;

  let bo = false;

  console.log(idx);
  console.log(lengthB);

  while (p2 - p1 > 1 || p4 - p3 > 1) {
    if (
      listA[p1] === listB[idx] ||
      listA[p2] === listB[idx] ||
      listA[p3] === listB[idx] ||
      listA[p4] === listB[idx]
    ) {
      bo = true;
      break;
    } else {
      p1 += 1;
      p2 -= 1;
      p3 += 1;
      p4 -= 1;
    }
  }

  if (bo === true) {
    result += "1\n";
  } else {
    result += "0\n";
  }

  // if (idx < lengthB - 1) {
  //   check();
  // }
};

// if () {
//   result += "1\n";
// } else {
//   result += "0\n";
// }
check();

console.log(result, "result");
