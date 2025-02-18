// // 4. Возврат в асинхронном коде
// import fs from 'fs';
//
// export default (filePath, data, cb) => {
//   fs.writeFile(filePath, data, (_error, cbData) => {
//     cb();
//   });
// };

// 5. Упорядочивание асинхронных операций
import fs from 'fs';

export const compareFileSizes = (filepath1, filepath2, cb) => {
  fs.stat(filepath1, (error1, { size: size1 }) => {
    fs.stat(filepath2, (error2, { size: size2 }) => {
      cb(null, Math.sign(size1 - size2));
    });
  });
};

compareFileSizes('oop.js', 'ood.js', (_err, result) => console.log(result));
