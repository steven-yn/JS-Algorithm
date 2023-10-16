function solution(clothes) {
  let answer = 0;
  let closet = {};

  clothes.forEach((elem) => {
    const key = elem[1];

    if (closet[key] === undefined) {
      closet[key] = [elem[0]];
    } else {
      closet[key].push(elem[0]);
    }
  });

  const result = Object.entries(closet).reduce((acc, cur) => {
    acc *= cur[1].length + 1;
    return acc;
  }, 1);

  return (answer = result - 1);
}
