import express, { Request, Response, NextFunction } from "express";

const app = express();

const arr = ["AbaAeCe", "baeeACA"];

function solution(arr: string[]) {
  // key 와 value 한쌍으로 이루어진 객체
  let hashMapFirst = new Map();
  let hashMapSecond = new Map();
  let answer: string = "";

  // let idx: number = 0;

  for (let elem of arr[0]) {
    const hasData = hashMapFirst.has(`${elem}`);

    if (hasData) {
      let value: number = hashMapFirst.get(`${elem}`);

      hashMapFirst.set(`${elem}`, value + 1);
    }

    if (!hasData) {
      hashMapFirst.set(`${elem}`, 1);
    }
  }

  for (let elem of arr[1]) {
    const hasData = hashMapSecond.has(`${elem}`);

    if (hasData) {
      let value: number = hashMapSecond.get(`${elem}`);

      hashMapSecond.set(`${elem}`, value + 1);
    }

    if (!hasData) {
      hashMapSecond.set(`${elem}`, 1);
    }
  }

  let keyList = [...hashMapFirst.keys()];

  let cnt = 0;

  console.log(keyList);

  keyList.forEach((key) => {
    if (hashMapFirst.get(`${key}`) === hashMapSecond.get(`${key}`)) {
      cnt++;
    }
  });

  if (cnt === 5) answer = "ANAGRAM";
  if (cnt !== 5) answer = "NOPE";

  return answer;
}

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(solution(arr));
});

app.listen("5000", () => {
  console.log(solution(arr));
});
