const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let input = fs.readFileSync(__dirname + filePath).toString();

let stack: number[] = [];

function solution(input: string) {
  if (input.length <= 1 && input.length >= 10000) {
    return;
  }
  const splitedInput = input.split("\n");
  const numInput = Number(splitedInput[0]);

  let result = "";

  const _push = (stack: number[], input: number | null) => {
    if (typeof input !== "number") {
      return;
    }

    stack.push(input);
  };

  const _pop = (stack: number[]) => {
    return stack.length === 0 ? -1 : stack.pop();
  };

  const _size = (stack: number[]) => {
    return stack.length;
  };

  const _empty = (stack: number[]) => {
    return stack.length === 0 ? 1 : 0;
  };

  const _top = (stack: number[]) => {
    return stack.length === 0 ? -1 : stack[stack.length - 1];
  };

  const execSelector = (value: string) => {
    switch (value) {
      case "pop": {
        const result = _pop(stack);
        return result;
      }

      case "size": {
        const result = _size(stack);
        return result;
      }

      case "empty": {
        const result = _empty(stack);
        return result;
      }

      case "top": {
        const result = _top(stack);
        return result;
      }

      default: {
        const splitedValue = value.split(" ")[1];
        const numValue = Number(splitedValue);
        const validNumber =
          typeof numValue === "number" && numValue >= 1 && numValue <= 100000
            ? numValue
            : null;

        _push(stack, validNumber);
        break;
      }
    }
  };

  splitedInput.forEach((inputLine, idx) => {
    if (idx === 0) {
      return;
    }

    if (idx > numInput) {
      return;
    }

    const resultStr = execSelector(inputLine);
    if (typeof resultStr === "number") {
      result += resultStr.toString() + "\n";
    }
  });

  return result;
}

console.log(solution(input));
