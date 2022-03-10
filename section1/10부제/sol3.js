function solution(date, arr) {
  let answer = 0;

  const target = arr.filter((elem) => {
    if (date === elem % 10) return elem;
  });

  return (answer = target.length);
}

const date = 0;
const arr = [12, 20, 54, 30, 87, 91, 30];

console.log(solution(date, arr));
