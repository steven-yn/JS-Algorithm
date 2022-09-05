import express, { Request, Response, NextFunction } from "express";

const app = express();

function solution(lazerAndPipe: string) {
  let answer: number = 0;
  const stack: string[] = [];
  let lazerCnt = 0;
  let beforeStr = "";

  if (lazerAndPipe.length > 100000) return;

  for (let elem of lazerAndPipe) {
    if (elem === "(") {
      stack.push(elem);
    }

    if (elem === ")") {
      if (beforeStr === "(") {
        stack.pop();

        lazerCnt += stack.length;
      }

      if (beforeStr === ")") {
        stack.pop();

        lazerCnt += 1;
      }
    }

    beforeStr = elem;
  }

  return (answer = lazerCnt);
}

const lazerAndPipe = "()(((()())(())()))(())";

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(solution(lazerAndPipe));
});

app.listen("4000", () => {
  console.log(solution(lazerAndPipe));
});
