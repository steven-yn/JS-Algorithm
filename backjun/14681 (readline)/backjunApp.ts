const readline = require("readline");
const readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readLineInterface.on("line", (line) => {
  input.push(line);
});

readLineInterface.on("close", () => {
  const x = Number(input[0]);
  const y = Number(input[1]);

  if (x > 0 && y > 0) {
    console.log("1");
    return process.exit();
  }

  if (x < 0 && y > 0) {
    console.log("2");
    return process.exit();
  }

  if (x < 0 && y < 0) {
    console.log("3");
    return process.exit();
  }

  if (x > 0 && y < 0) {
    console.log("4");
    return process.exit();
  }
});
