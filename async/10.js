// 10. Обработка ошибок в промисах
import fsp from 'fs/promises';

export const touch = (filepath) => {
  return fsp.access(filepath).catch(() => fsp.writeFile(filepath, ''));
};

touch('file2.txt').then(() => console.log('created!'));
