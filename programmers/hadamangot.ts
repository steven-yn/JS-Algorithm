function solutions(n, computers) {
  let networkList = [new Set([0])];

  const setLoop = (i, j) => {
    let result = null;
    let idx = 0;
    const LENGTH = networkList.length;

    while (idx < LENGTH) {
      const network = networkList[idx];
      if (network.has(i) || network.has(j)) {
        network.add(i);
        network.add(j);
        result = network;
      }
      idx++;
    }

    if (!result) {
      result = new Set([i, j]);
      networkList.push(result);
    }

    return result;
  };

  const traverse = (i, j) => {
    if (i > n - 1 || j > n - 1) return;

    if (computers[i][j] === 1 && computers[j][i] === 1) {
      setLoop(i, j);
    }

    traverse(i, j + 1);
    traverse(i + 1, j);
  };

  traverse(0, 0);

  console.log(networkList);

  return networkList.length;
}

console.log(
  solutions(5, [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1],
  ]),
  "answer"
);

// 0 1 2
// 1-1 0
// 1-1 0
// 0 0 1

// 0 1 2
// 1-1 0
// 1-1-1
// 0 1-1

// 0-1, 0-2, 1-3, 1-4, 3-4

// 0 1 2 3 4
// 1 1 1 0 0
// 1 1 0 1 1
// 1 0 1 0 0
// 0 1 0 1 1
// 0 1 0 1 1

// [1, 0, 1, 0, 1],
// [1, 0, 0, 1, 1],
// [1, 0, 1, 0, 1],
// [0, 1, 0, 1, 1],
// [0, 1, 0, 1, 1],

// function solution(n, computers) {
//   const visited = new Array(n).fill(0)
//   let count = 0;

//   for (let i=0; i<visited.length; i++) {
//       if (visited[i] === 1) continue;

//       count += 1;
//       dfs(computers, visited, i);
//   }

//   return count;
// }

// function dfs(map, visited, node) {
//   visited[node] = 1;

//   for (let i=0; i<map[node].length; i++) {
//       if ( map[node][i] && visited[i] === 0) {
//           dfs(map, visited, i);
//       }
//   }
// }
