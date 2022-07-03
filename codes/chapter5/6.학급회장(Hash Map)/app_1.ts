import express, { Request, Response, NextFunction } from "express";

const app = express();

const num = 15;
const arr = [
  "B",
  "A",
  "C",
  "B",
  "A",
  "C",
  "C",
  "A",
  "C",
  "C",
  "B",
  "D",
  "E",
  "D",
  "E",
];

function solution(num: number, arr: string[]) {
  // key 와 value 한쌍으로 이루어진 객체
  let hashMap = new Map();
  let answer: string = "";

  arr.forEach((item) => {
    if (!hashMap.has(item)) {
      hashMap.set(item, 1);
      return;
    }

    const hashValue = hashMap.get(item);

    hashMap.set(item, hashValue + 1);
  });

  let maxValue = Number.MIN_SAFE_INTEGER;

  hashMap.forEach((value: number, key: string) => {
    if (value > maxValue) {
      maxValue = value;
      answer = key;
    }
  });

  return answer;
}

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(solution(num, arr));
});

app.listen("5000", () => {
  console.log(solution(num, arr));
});
