const tree = {
  left: {
    left: {
      left: {
        right: {
          left: {
            value: 7,
          },
          right: {
            value: 14,
          },
          value: 66,
        },
        value: 23,
      },
      value: 90,
    },
    right: {
      value: 67,
    },
    value: 34,
  },
  right: {
    value: 11,
  },
  value: 16,
};

function treeValueSumm(value) {
  // your code here
  return 0;
}

console.log(treeValueSumm(tree));
console.log(treeValueSumm(tree) === 328);
