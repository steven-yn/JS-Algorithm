function solution(prices) {
  const ORIGIN_LENGTH = prices.length;

  let answer = [];
  let startPointer = 0;

  for (let i = 0; i < ORIGIN_LENGTH; i++) {
    let during = 0;
    const currentValue = prices[i];
    startPointer = i + 1;

    if (startPointer >= ORIGIN_LENGTH) {
      answer.push(during);
    } else if (currentValue === 1) {
      answer.push(ORIGIN_LENGTH - startPointer);
    } else {
      for (let j = startPointer; j < ORIGIN_LENGTH; j++) {
        const targetValue = prices[j];

        during += 1;

        if (currentValue > targetValue) {
          answer.push(during);
          break;
        } else if (j === ORIGIN_LENGTH - 1) {
          answer.push(during);
          break;
        }
      }
    }
  }

  return answer;
}

solution([1, 2, 3, 2, 3]); // [4, 3, 1, 1, 0]
