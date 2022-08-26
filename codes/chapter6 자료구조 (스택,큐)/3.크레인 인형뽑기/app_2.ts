import express, { Request, Response, NextFunction } from "express";

const app = express();

function solution(board: number[][], moves: number[]) {
  let answer: number = 0;
  const basket: number[] = [];

  moves.forEach((elem) => {
    board[elem - 1].forEach((doll) => {
      if (doll !== 0) {
      }
    });
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
