// 2. Определения
const removeFirstLevel = (tree) => {
  return tree
    .flat(0)
    .filter((elem) => Array.isArray(elem))
    .flat();
};

// Второй уровень тут: 5, 3, 4
const tree1 = [[5], 1, [3, 4]];
console.log(removeFirstLevel(tree1)); // [5, 3, 4]

const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
console.log(removeFirstLevel(tree2)); // [3, 5, [4, 3], 2]
