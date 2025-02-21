// // 4. Возврат в асинхронном коде
// import fs from 'fs';
//
// export default (filePath, data, cb) => {
//   fs.writeFile(filePath, data, (_error, cbData) => {
//     cb();
//   });
// };

// // 5. Упорядочивание асинхронных операций
// import fs from 'fs';
//
// export const compareFileSizes = (filepath1, filepath2, cb) => {
//   fs.stat(filepath1, (error1, { size: size1 }) => {
//     fs.stat(filepath2, (error2, { size: size2 }) => {
//       cb(null, Math.sign(size1 - size2));
//     });
//   });
// };
//
// compareFileSizes('oop.js', 'ood.js', (_err, result) => console.log(result));

// // 6. Обработка ошибок
// import fs from 'fs';
//
// export const move = (filepath1, filepath2, cb) => {
//   fs.readFile(filepath1, 'utf8', (err, data) => {
//     if (err) return cb(err);
//     fs.writeFile(filepath2, data, 'utf8', (err, data) => {
//       if (err) return cb(err);
//       fs.unlink(filepath1, (err) => {
//         if (err) return cb(err);
//         cb(null);
//       });
//     });
//   });
// };
//
// move('test.txt', 'test2.txt', (error) => {
//   if (error) {
//     console.log('oops');
//     return;
//   }
//   console.log('yes!');
// });

// // 7. Параллельное выполнение операций
// import path from 'path';
// import fs from 'fs';
// import async from 'async';
//
// export const getDirectorySize = (dirPath, cb) => {
//   fs.readdir(dirPath, (error1, files) => {
//     if (error1) {
//       cb(error1);
//       return;
//     }
//     async.map(files.map((file) => path.join(dirPath, file)), fs.stat, (error2, stats) => {
//       if (error2) {
//         cb(error2);
//         return;
//       }
//       cb(null, stats.filter((stat) => stat.isFile()).reduce((acc, stat) => acc + stat.size, 0));
//     });
//   });
// };
//
// getDirectorySize('./', (err, size) => {
//   console.log(size);
// });
//
// // Ошибка
// getDirectorySize('/undefined', (err, size) => {
//   console.error(err);
// });

// // 8. Таймеры
// import fs from 'fs';
//
// const watch = (filepath, interval, cb) => {
//   let lastUpd = Date.now();
//   const id = setInterval(() => {
//     fs.stat(filepath, (error2, stats) => {
//       if (error2) {
//         clearInterval(id);
//         cb(error2);
//         return;
//       }
//       if (stats.mtimeMs > lastUpd) {
//         lastUpd = stats.mtimeMs;
//         cb(null);
//       }
//     });
//   }, interval);
//   return id;
// };
//
// const id = watch('test.txt', 500, (err) => {
//   console.log(err, 'Wow!');
// });
//
// setTimeout(() => fs.appendFileSync('test.txt', 'ehu'), 700);
// setTimeout(() => clearInterval(id), 5000); // остановить отслеживание через 5 секунд

// //9. Промисы (Promise)
// import fsp from 'fs/promises';
//
// export const reverse = (filepath) => {
//   return fsp.readFile(filepath, 'utf8')
//     .then((data) => data.split('\n').reverse().join('\n'))
//     .then((data) => fsp.writeFile(filepath, data));
// };
//
// reverse('file.txt');

// // 10. Обработка ошибок в промисах
// import fsp from 'fs/promises';
//
// export const touch = (filepath) => {
//   return fsp.access(filepath).catch(() => fsp.writeFile(filepath, ''));
// };
//
// touch('file2.txt').then(() => console.log('created!'));

// 11. Цепочка промисов
import fsp from 'fs/promises';

export const getTypes = (filePaths) => {
  const initPromise = Promise.resolve([]);
  return filePaths.reduce((acc, path) => acc.then((contents) => fsp.stat(path)
    .then((stats) => {
      if (stats.isFile()) {
        contents.push('file');
      } else if (stats.isDirectory()) {
        contents.push('directory');
      } else {
        contents.push(null);
      }
      return contents;
    })
    .catch(() => {
      contents.push(null);
      return contents;
    })), initPromise);
};

getTypes(['/etc', '/etc/hosts', '/undefined']).then(console.log);
