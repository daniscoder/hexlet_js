//9. Промисы (Promise)
import fsp from 'fs/promises';

export const reverse = (filepath) => {
  return fsp.readFile(filepath, 'utf8')
    .then((data) => data.split('\n').reverse().join('\n'))
    .then((data) => fsp.writeFile(filepath, data));
};

reverse('file.txt');
