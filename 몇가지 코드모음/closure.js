const increase = (() => {
  let num = 0;
  return () => {
    return ++num;
  };
})();

console.log(increase());
console.log(increase());
console.log(increase());
