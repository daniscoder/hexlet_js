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
// import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
//
// const func = () =>
//   mkdir(
//     'nodejs-package',
//     [
//       mkfile('Makefile'),
//       mkfile('README.md'),
//       mkdir('dist', []),
//       mkdir('__tests__', [mkfile('half.test.js', { type: 'text/javascript' })]),
//       mkfile('babel.config.js', { type: 'text/javascript' }),
//       mkdir('node_modules', [mkdir('@babel', [mkdir('cli', [mkfile('LICENSE')])])], {
//         owner: 'root',
//         hidden: false,
//       }),
//     ],
//     { hidden: true },
//   );
//
// console.log(func());

// 4. Манипуляции с виртуальной файловой системой
// import _ from 'lodash';
// import * as trees from '@hexlet/immutable-fs-trees';
//
// const compressImages = (tree) => trees.mkdir(
//   trees.getName(tree),
//   _.cloneDeep(trees.getChildren(tree)).map((children) => {
//     const meta = trees.getMeta(children);
//     if (trees.isFile(children) && trees.getName(children).endsWith('.jpg')) {
//       meta.size /= 2;
//     }
//     return children;
//   }),
//   _.cloneDeep(trees.getMeta(tree)),
// );
//
// const tree = trees.mkdir('my documents', [
//   trees.mkfile('avatar.jpg', { size: 100, attributes: { hide: false, readOnly: true } }),
//   trees.mkfile('passport.jpg', { size: 200 }),
//   trees.mkfile('family.jpg', { size: 150 }),
//   trees.mkfile('addresses', { size: 125 }),
//   trees.mkdir('presentations'),
// ]);
//
// const newTree = compressImages(tree);
// console.log(JSON.stringify(newTree, null, 2));

// 5. Обход дерева
import { mkdir, mkfile, isFile, getName, getMeta, getChildren } from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const downcaseFileNames = (tree) => {
  const name = getName(tree);
  const meta = _.cloneDeep(getMeta(tree));

  if (isFile(tree)) {
    return mkfile(name.toLowerCase(), meta);
  }

  const children = getChildren(tree);
  const newChildren = children.map((child) => downcaseFileNames(child));
  return mkdir(name, newChildren, meta);
};

const tree = mkdir('/', [
  mkdir('eTc', [mkdir('NgiNx'), mkdir('CONSUL', [mkfile('config.json')])]),
  mkfile('hOsts'),
]);

console.log(tree);
console.log(downcaseFileNames(tree));
