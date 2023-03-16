const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const findNumber = (inputString: string) => {
  let result = "";
  // O(n)
  const inputList = inputString.split("\n");

  const limitN = Number(inputList[0]);
  const limitM = Number(inputList[2]);

  let freqA = {};
  let freqT = {};

  // const listA = inputList[1].split(" ");
  const soltedA = inputList[1]
    .split(" ", limitN)
    .sort((a, b) => Number(a) - Number(b));
  const listT = inputList[3].split(" ");

  let searchIdx = 0;

  const binarySearch = (targetVal: number) => {
    // const targetVal = Number(listT[pointer]);

    const halfIdx =
      searchIdx === 0 ? Math.round(soltedA.length / 2) : searchIdx; // 4
    const halfVal = Number(soltedA[halfIdx]);

    if (targetVal === halfVal) {
      return true;
    }

    if (targetVal < halfVal) {
      const down = Math.round(halfIdx / 2); // 2
      if (down <= 0) {
        return false;
      }

      searchIdx = down;
    }

    if (targetVal > halfVal) {
      const up = halfIdx + Math.round(halfIdx / 2);

      if (up >= soltedA.length) {
        return false;
      }

      searchIdx = up; // 6
    }

    // pointer += 1;
    binarySearch(targetVal);
  };

  let idx = 0;
  for (let val of listT) {
    if (idx >= limitM) return (result += "0\n");

    searchIdx = 0;
    const isExist = binarySearch(Number(val));

    if (isExist) {
      result += "1\n";
    }

    if (!isExist) {
      result += "0\n";
    }

    idx += 1;
  }

  return result;
};

console.log(findNumber(inputFile));
