import express, { Request, Response, NextFunction } from "express";

const app = express();

function solution(str: string) {
  let answer: any = "";
  let stack: string[] = [];

  for (let elem of str) {
    if (elem === "(") {
      stack.push("(");
    }

    if (elem === ")" && stack.length >= 1) {
      stack.pop();
    }
  }

  return (answer = stack);
}

const strInput: string = "(()(()))(()";

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(solution(strInput));
});

app.listen("5000", () => {
  console.log(solution(strInput));
});
