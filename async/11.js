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
