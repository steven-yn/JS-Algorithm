// 아나그램이란 알파벳의 개수가 순서에 상관없이 모두 동일하게 같을때 아나그램이라고 한다.
// 두 문자열이 서로 아나그램이라면 true, 아니면 false 를 반환 하는 함수 validAnagram 을 작성하라.

// validAnagram('', '') // true
// validAnagram('anagram', 'nagaram') // true
// validAnagram('rat', 'car') // false
// validAnagram('aaz', 'zza') // false

// 문자들이 나타나는 정확한 횟수와 빈도가 정확한지 확인 해야함

const validAnagram = (str1: string, str2: string) => {
  if (str1 === "" && str1 === str2) return true;

  let freq1 = {};
  let freq2 = {};

  for (let val1 of str1) {
    if (freq1[val1]) {
      freq1[val1] += 1;
    } else {
      freq1[val1] = 1;
    }
  }

  for (let val2 of str2) {
    if (freq2[val2]) {
      freq2[val2] += 1;
    } else {
      freq2[val2] = 1;
    }
  }

  console.log(freq1);
  console.log(freq2);

  for (let key in freq1) {
    if (!(key in freq2)) {
      return false;
    }

    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }

  return true;
};

console.log(validAnagram("rat", "car"));
