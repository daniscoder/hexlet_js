// 7. Параллельное выполнение операций
import path from 'path';
import fs from 'fs';
import async from 'async';

export const getDirectorySize = (dirPath, cb) => {
  fs.readdir(dirPath, (error1, files) => {
    if (error1) {
      cb(error1);
      return;
    }
    async.map(files.map((file) => path.join(dirPath, file)), fs.stat, (error2, stats) => {
      if (error2) {
        cb(error2);
        return;
      }
      cb(null, stats.filter((stat) => stat.isFile()).reduce((acc, stat) => acc + stat.size, 0));
    });
  });
};

getDirectorySize('./', (err, size) => {
  console.log(size);
});

// Ошибка
getDirectorySize('/undefined', (err, size) => {
  console.error(err);
});
