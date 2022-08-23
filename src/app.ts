import express, { Request, Response, NextFunction } from "express";

const app = express();

function solution(str: string) {
  let answer: any = "";
  let stack: string[] = [];
  let idx: number = 0;

  for (let elem of str) {
    stack.push(elem);

    if (elem === ")" && stack.length >= 1) {
      while (stack[stack.length - 1] !== "(") {
        stack.pop();
      }
      stack.pop();
    }

    idx++;
  }

  answer = stack.join("");

  return answer;
}

const strInput: string = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(solution(strInput));
});

app.listen("5000", () => {
  console.log(solution(strInput));
});
