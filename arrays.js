// 16
// const bubbleSort  = (arr) => {
//     let count = arr.length;
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < count; i += 1) {
//             if (arr[i] > arr[i + 1]) {
//                 const temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true
//             }
//         }
//         count -= 1;
//     } while (swapped);
//     return arr;
// };
//
// console.log(bubbleSort([3, 10, 4, 3]))

// 17
// const openingSymbols = ['(', '[', '{', '<'];
// const closingSymbols = [')', ']', '}', '>'];
//
// const isBracketStructureBalanced  = (text) => {
//     const lastOpeningSymbolsIndex = [];
//     for (const symbol of text) {
//         const openingSymbolIndex = openingSymbols.indexOf(symbol);
//         if (openingSymbolIndex > -1) {
//             lastOpeningSymbolsIndex.push(openingSymbolIndex);
//         }
//         const closingSymbolIndex = closingSymbols.indexOf(symbol);
//         if (closingSymbolIndex > -1) {
//             if (closingSymbolIndex !== lastOpeningSymbolsIndex.pop()) {
//                 return false;
//             }
//         }
//     }
//     return lastOpeningSymbolsIndex.length === 0;
// };
//
// console.log(isBracketStructureBalanced('}'));

// 18
// const getIntersectionOfSortedArrays = (arr1, arr2) => {
//     let i1 = 0;
//     let i2 = 0;
//     const intersectionArrays = [];
//     while (i1 < arr1.length && i2 < arr2.length) {
//         if (arr1[i1] === arr2[i2]) {
//             if (arr1[i1] !== intersectionArrays.at(-1)) {
//                 intersectionArrays.push(arr1[i1]);
//             }
//             i1++;
//             i2++;
//         } else if (arr1[i1] > arr2[i2]) {
//             i2++;
//         } else {
//             i1++
//         }
//     }
//     return intersectionArrays;
// };
//
// console.log(getIntersectionOfSortedArrays([1, 1, 1, 2, 2, 2], [1, 1, 2, 2, 3, 3])); // [10, 24]

// 19
// const getDistance = ([x1, y1], [x2, y2]) => {
//     const xs = x2 - x1;
//     const ys = y2 - y1;
//
//     return Math.sqrt(xs ** 2 + ys ** 2);
// };
//
// const getTheNearestLocation = (locations, point) => {
//     if (!locations.length) {
//         return null;
//     }
//     let i = 0;
//     let minDistanceIndex = 0;
//     let minDistance = Number.MAX_VALUE;
//     for (const [, locationPoint] of locations) {
//         const distance = getDistance(locationPoint, point);
//         if (distance < minDistance) {
//             minDistance = distance;
//             minDistanceIndex = i;
//         }
//         i += 1;
//     }
//     return locations[minDistanceIndex];
// }
//
// const locations = [
//     ['Park', [10, 5]],
//     ['Sea', [1, 3]],
//     ['Museum', [8, 4]],
// ];
//
// const currentPoint = [5, 5];
//
// // Если мест нет, то возвращается null
// console.log(getTheNearestLocation([], currentPoint)); // null
//
// console.log(getTheNearestLocation(locations, currentPoint)); // ['Museum', [8, 4]]

// 20
// export const getMax = (arr) => {
//     if (!arr.length) {
//         return null;
//     }
//     let [maxElem, ...rest] = arr;
//     for (const elem of rest) {
//         if (elem > maxElem) {
//             maxElem = elem;
//         }
//     }
//     return maxElem;
// };
//
// console.log(getMax([])); // null
// console.log(getMax([1, 10, 8])); // 10

// 21
// export const flatten = (arr) => {
//     let resultArr = [];
//     for (const elem of arr) {
//         resultArr = elem instanceof Array ? [...resultArr, ...elem] : [...resultArr, elem];
//     }
//
//     return resultArr;
// };
//
// console.log(flatten([])); // []
// console.log(flatten([1, [3, 2], 9])); // [1, 3, 2, 9]
// console.log(flatten([1, [[2], [3]], [9]])); // [1, [2], [3], 9]

// 8. Морской бой
// export const calcShipsCount = (ships) => {
//     let shipsCount = 0;
//     for (let row = 0; row < ships.length; row += 1) {
//         for (let col = 0; col < ships[row].length; col += 1) {
//             if (ships[row][col] === 1
//                 && (row - 1 >= 0 ? ships[row - 1][col] === 0 : true)
//                 && (col - 1 >= 0 ? ships[row][col - 1] === 0 : true)
//             ) {
//                 shipsCount += 1;
//             }
//         }
//     }
//     return shipsCount;
// };
//
// export const isValidField = (ships) => {
//     for (let row = 0; row < ships.length; row += 1) {
//         for (let col = 0; col < ships[row].length; col += 1) {
//             if (ships[row][col] === 1) {
//                 if ((row - 1 >= 0 && col - 1 >= 0 && ships[row - 1][col - 1] === 1)
//                     || (row + 1 < ships.length && col - 1 >= 0 && ships[row + 1][col - 1] === 1)
//                     || (row - 1 >= 0 && col + 1 < ships[row].length && ships[row - 1][col + 1] === 1)
//                     || (row + 1 < ships.length && col + 1 < ships[row].length && ships[row + 1][col + 1] === 1)
//                 ) {
//                     return false;
//                 }
//             }
//         }
//     }
//     return true;
// };
//
// console.log(calcShipsCount([])); // 0
// console.log(calcShipsCount([
//     [0, 1, 0, 0, 0, 0],
//     [0, 1, 0, 1, 1, 1],
//     [0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 0, 1],
//     [0, 0, 0, 0, 0, 1],
//     [1, 1, 0, 1, 0, 0],
// ])); // 6
// console.log(isValidField([
//     [0, 1, 0, 0],
//     [1, 0, 0, 1],
//     [0, 0, 0, 0],
//     [0, 1, 1, 1],
// ])); // false

// 9. Самая длинная подстрока
// const getLongestLength = (text) => {
//   const textLength = text.length;
//   let maxLength = 0;
//   for (let i = 0; i < textLength; i += 1) {
//     let max = 0;
//     const symbols = [];
//     for (let j = i; j < textLength; j += 1) {
//       if (symbols.indexOf(text[j]) > -1) {
//         max = Math.max(symbols.length, max);
//         break;
//       } else {
//         symbols.push(text[j]);
//       }
//     }
//     if (max === 0) {
//       max = symbols.length;
//     }
//     maxLength = Math.max(symbols.length, maxLength);
//   }
//
//   return maxLength;
// };
//
// export default getLongestLength;
//
// console.log(getLongestLength('abcddef')); // 5
// console.log(getLongestLength('jabjcdel')); // 7

// 5. Улитка
const buildSnailPath = (arr) => {
  let resArr = [];
  while (arr.length) {
    resArr.push(...arr.shift());
    arr.map((row) => resArr.push(row.pop()));

    arr.reverse().map((row) => row.reverse());
  }
  return resArr;
};

console.log(
  buildSnailPath([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ]),
);
