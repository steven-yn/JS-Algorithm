import express, { Request, Response, NextFunction } from "express";

const app = express();

function solution(board: number[][], moves: number[]) {
  let answer: number = 0;
  const basket: number[] = [];

  if (board.length > 30 || board.length < 5) return;
  if (moves.length > 1000 || moves.length < 1) return;

  moves.forEach((elem) => {
    if (elem < 1 || board.length < elem) return;

    const doll = board[elem - 1].pop();
    if (doll && doll >= 0) {
      board[elem - 1].push(0);
    }

    if (doll && doll >= 0 && doll <= 100) {
      if (basket.find((elem) => elem === doll)) {
        answer += 2;
        basket.shift();
        return;
      }

      basket.push(doll);
    }
  });

  return answer;
}

const board: number[][] = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves: number[] = [1, 5, 3, 5, 1, 2, 1, 4];

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(solution(board, moves));
});

app.listen("4000", () => {
  console.log(solution(board, moves));
});
