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
// import { mkdir, mkfile, isFile, getName, getMeta, getChildren } from '@hexlet/immutable-fs-trees';
// import _ from 'lodash';
//
// const downcaseFileNames = (tree) => {
//   const name = getName(tree);
//   const meta = _.cloneDeep(getMeta(tree));
//
//   if (isFile(tree)) {
//     return mkfile(name.toLowerCase(), meta);
//   }
//
//   const children = getChildren(tree);
//   const newChildren = children.map((child) => downcaseFileNames(child));
//   return mkdir(name, newChildren, meta);
// };
//
// const tree = mkdir('/', [
//   mkdir('eTc', [mkdir('NgiNx'), mkdir('CONSUL', [mkfile('config.json')])]),
//   mkfile('hOsts'),
// ]);
//
// console.log(tree);
// console.log(downcaseFileNames(tree));

// 6. Агрегация
// import _ from 'lodash';
// import { mkdir, mkfile, isFile, getName, getChildren, getMeta } from '@hexlet/immutable-fs-trees';
//
// const getHiddenFilesCount = (tree) => {
//   const name = getName(tree);
//
//   if (isFile(tree)) {
//     return name.startsWith('.') ? 1 : 0;
//   }
//
//   const children = getChildren(tree);
//   const hiddenFilesCount = children.map((child) => getHiddenFilesCount(child));
//   return _.sum(hiddenFilesCount);
// };
//
// const tree = mkdir('/', [
//   mkdir('etc', [
//     mkdir('apache'),
//     mkdir('nginx', [mkfile('.nginx.conf', { size: 800 })]),
//     mkdir('.consul', [
//       mkfile('.config.json', { size: 1200 }),
//       mkfile('data', { size: 8200 }),
//       mkfile('raft', { size: 80 }),
//     ]),
//   ]),
//   mkfile('.hosts', { size: 3500 }),
//   mkfile('resolve', { size: 1000 }),
// ]);
//
// console.log(tree);
// console.log(getHiddenFilesCount(tree)); // 3

// 7. Агрегация 2
// import _ from 'lodash';
// import { mkdir, mkfile, isFile, getName, getMeta, getChildren } from '@hexlet/immutable-fs-trees';
//
// const getFilesSize = (node) => {
//   if (isFile(node)) {
//     const meta = getMeta(node);
//     return meta.size;
//   }
//
//   const children = getChildren(node);
//   const descendantCounts = children.map(getFilesSize);
//   return _.sum(descendantCounts);
// };
//
// const du = (tree) => {
//   const children = getChildren(tree);
//   return children.map((child) => [getName(child), getFilesSize(child)]).sort((a, b) => b[1] - a[1]);
// };
//
// const tree = mkdir('/', [
//   mkdir('etc', [
//     mkdir('apache'),
//     mkdir('nginx', [mkfile('nginx.conf', { size: 800 })]),
//     mkdir('consul', [
//       mkfile('config.json', { size: 1200 }),
//       mkfile('data', { size: 8200 }),
//       mkfile('raft', { size: 80 }),
//     ]),
//   ]),
//   mkfile('hosts', { size: 3500 }),
//   mkfile('resolve', { size: 1000 }),
// ]);
//
// console.log(du(tree));
// // [
// //   ['etc', 10280],
// //   ['hosts', 3500],
// //   ['resolve', 1000],
// // ]
// console.log(du(getChildren(tree)[0]));

// 8. Аккумулятор
import path from 'path';
import { mkdir, mkfile, isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('apache'),
    mkdir('nginx', [mkfile('nginx.conf', { size: 800 })]),
    mkdir('consul', [
      mkfile('config.json', { size: 1200 }),
      mkfile('data', { size: 8200 }),
      mkfile('raft', { size: 80 }),
    ]),
  ]),
  mkfile('hosts', { size: 3500 }),
  mkfile('resolve', { size: 1000 }),
]);

const findFilesByName = (tree, subStr) => {
  const iter = (node, depth) => {
    const name = getName(node);
    const pathName = path.join(depth, name);

    if (isFile(node)) {
      if (name.includes(subStr)) {
        return pathName;
      }
      return [];
    }

    const children = getChildren(node);
    return children.flatMap((child) => iter(child, pathName));
  };

  return iter(tree, '');
};

console.log(findFilesByName(tree, 'co'));
// ['/etc/nginx/nginx.conf', '/etc/consul/config.json']

// 9. HTML-дерево
// import _ from 'lodash';
//
// const changeClass = (tree, oldClass, newClass) => {
//   const iter = (node) => {
//     if (Object.hasOwn(node, 'className')) {
//       node.className = node.className === oldClass ? newClass : node.className;
//     }
//     if (Object.hasOwn(node, 'children')) {
//       node.children = node.children.map(iter);
//     }
//     return node;
//   };
//   return iter(_.cloneDeep(tree));
// };
//
// const tree = {
//   name: 'div',
//   type: 'tag-internal',
//   className: 'hexlet-community',
//   children: [
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'old-class',
//       children: [],
//     },
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'old-class',
//       children: [],
//     },
//   ],
// };
//
// console.log(changeClass(tree, 'old-class', 'new-class'));
// Результат:
// {
//   name: 'div',
//   type: 'tag-internal',
//   className: 'hexlet-community',
//   children: [
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//   ],
// }
