const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

const _push = (stack: number[], input: number | null) => {
  if (typeof input !== "number") {
    return;
  }

  stack.push(input);
};

const _pop = (stack: number[]) => {
  return stack.length === 0 ? -1 : stack.shift();
};

const _size = (stack: number[]) => {
  return stack.length;
};

const _empty = (stack: number[]) => {
  return stack.length === 0 ? 1 : 0;
};

const _front = (stack: number[]) => {
  return stack.length === 0 ? -1 : stack[0];
};

const _back = (stack: number[]) => {
  return stack.length === 0 ? -1 : stack[stack.length - 1];
};

let stack: number[] = [];

const solution = (input: string) => {
  let result = "";
  const inputList = input.split("\n");
  const limit = Number(inputList[0]);

  const loopList = inputList.slice(1, limit + 1);

  loopList.forEach((value, idx) => {
    if (idx >= limit) return;

    switch (value) {
      case "pop": {
        result += _pop(stack) + "\n";
        break;
      }

      case "size": {
        result += _size(stack) + "\n";
        break;
      }
      case "empty": {
        result += _empty(stack) + "\n";
        break;
      }

      case "front": {
        result += _front(stack) + "\n";
        break;
      }

      case "back": {
        result += _back(stack) + "\n";
        break;
      }

      default: {
        if (value.includes("push")) {
          _push(stack, Number(value.split(" ")[1]));
        }
        break;
      }
    }
  });

  return result.slice(0, result.length - 1);
};

console.log(solution(inputFile));
