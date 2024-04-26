// 2. Определения
// const removeFirstLevel = (tree) => {
//   return tree
//     .flat(0)
//     .filter((elem) => Array.isArray(elem))
//     .flat();
// };
//
// // Второй уровень тут: 5, 3, 4
// const tree1 = [[5], 1, [3, 4]];
// console.log(removeFirstLevel(tree1)); // [5, 3, 4]
//
// const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
// console.log(removeFirstLevel(tree2)); // [3, 5, [4, 3], 2]

// 3. Виртуальная файловая система
import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';

const func = () =>
  mkdir(
    'nodejs-package',
    [
      mkfile('Makefile'),
      mkfile('README.md'),
      mkdir('dist', []),
      mkdir('__tests__', [mkfile('half.test.js', { type: 'text/javascript' })]),
      mkfile('babel.config.js', { type: 'text/javascript' }),
      mkdir('node_modules', [mkdir('@babel', [mkdir('cli', [mkfile('LICENSE')])])], {
        owner: 'root',
        hidden: false,
      }),
    ],
    { hidden: true },
  );

console.log(func());