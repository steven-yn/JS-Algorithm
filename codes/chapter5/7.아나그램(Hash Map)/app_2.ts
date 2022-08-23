import express, { Request, Response, NextFunction } from "express";

const app = express();

const arr = ["AbaAeCe", "baeeACA"];

function solution(arr: string[]) {
  // key 와 value 한쌍으로 이루어진 객체
  let hashMapFirst = new Map();
  let answer: string = "";

  let idx: number = 0;

  for (let elem of arr[0]) {
    if (hashMapFirst.has(`${elem}`)) {
      hashMapFirst.set(`${elem}`, hashMapFirst.get(`${elem}`) + 1);
    }

    if (!hashMapFirst.has(`${elem}`)) {
      hashMapFirst.set(`${elem}`, 1);
    }
  }

  for (let elem of arr[1]) {
    if (!hashMapFirst.has(`${elem}`)) {
      return (answer = "NOPE");
    }

    hashMapFirst.set(`${elem}`, hashMapFirst.get(`${elem}`) - 1);
  }

  hashMapFirst.forEach((data) => {
    idx += data;
  });

  if (idx === 0) return (answer = "ANAGRAM");
  if (idx !== 0) return (answer = "NOPE");
}

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(solution(arr));
});

app.listen("5000", () => {
  console.log(solution(arr));
});
