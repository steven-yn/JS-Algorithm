const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "/input.txt";
let inputFile: string = fs.readFileSync(__dirname + filePath).toString();

// const setDeck = (limit: number) => {
//   return new Array(limit);
// };

// let idx = 1;

// const solution = (input: string) => {
//   const numValue = Number(input);
//   if (numValue >= 1 && numValue <= 500000) {
//     let cardDeck = setDeck(numValue);

//     if (cardDeck.length === numValue) {
//       while (cardDeck.length > 2) {
//         cardDeck.pop();
//         cardDeck[0] = idx + 1;
//         idx += 1;
//       }

//       return cardDeck[0] - 1;
//     }
//   }
// };

const sol = (input: string) => {
  const limit = Number(input.split("\n")[0]);

  if (limit >= 1 && limit <= 500000) {
    let list = [];
    let idx = 0;

    while (idx < limit) {
      list.push(idx + 1);
      idx += 1;
    }

    if (list.length === limit) {
      while (1) {
        list.shift();
        const val = list.shift();
        list.push(val);

        if (list.length === 2) {
          break;
        }
      }

      return list[1];
    }
  }
};

const imp = (input: string) => {
  const limit = Number(input.split("\n")[0]);

  if (limit >= 1 && limit <= 500000) {
    const list = new Array(limit);

    for (let i = 1; i < limit + 1; i++) {}
  }
};

console.log(imp(inputFile));
