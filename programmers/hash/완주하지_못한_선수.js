function solution(participant, completion) {
  var answer = "";
  let obj = {};

  participant.forEach((person) => {
    if (!obj[person]) {
      obj[person] = 1;
    } else if (obj[person]) {
      obj[person] += 1;
    }
  });

  completion.forEach((cperson) => {
    if (obj[cperson] === 1) {
      delete obj[cperson];
    } else if (obj[cperson]) {
      obj[cperson] -= 1;
    }
  });

  return (answer = Object.keys(obj)[0]);
}
