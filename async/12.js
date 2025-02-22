// 12. Promise.all
import path from 'path';
import fsp from 'fs/promises';

export const getDirectorySize = (dirPath) =>
  fsp.readdir(dirPath).then((files) => {
    const promises = files.map((file) => fsp.stat(path.join(dirPath, file)));
    return Promise.all(promises).then((stats) => stats
        .filter((stat) => stat.isFile())
        .reduce((acc, stat) => acc + stat.size, 0)
    );
  });

getDirectorySize('./3').then(console.log);
