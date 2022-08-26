import express, { Request, Response, NextFunction } from "express";

const app = express();

function solution(sick: string) {
  let answer: number = 0;
  let mid: number = 0;

  const stack: string[] = [];

  let right: string | undefined = "";
  let left: string | undefined = "";

  for (let elem of sick) {
    if (Number(elem)) {
      stack.push(elem);
    }

    if (!Number(elem)) {
      if (mid) {
        right = stack.pop();

        const rightNum = Number(right);
        const leftNum = mid;

        if (leftNum && rightNum) {
          switch (elem) {
            case "+":
              mid = leftNum + rightNum;
              break;
            case "-":
              mid = leftNum - rightNum;
              break;
            case "*":
              mid = leftNum * rightNum;
              break;
            case "%":
              mid = leftNum % rightNum;
              break;
            default:
              break;
          }
        }
      }

      if (!mid) {
        right = stack.pop();
        left = stack.pop();

        const rightNum = Number(right);
        const leftNum = Number(left);

        if (leftNum && rightNum) {
          switch (elem) {
            case "+":
              mid = leftNum + rightNum;
              break;
            case "-":
              mid = leftNum - rightNum;
              break;
            case "*":
              mid = leftNum * rightNum;
              break;
            case "%":
              mid = leftNum % rightNum;
              break;
            default:
              break;
          }
        }
      }
    }
  }

  answer = mid;

  return answer;
}

const sick = "352+*9-";

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(solution(sick));
});

app.listen("4000", () => {
  console.log(solution(sick));
});
