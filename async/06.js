// 6. Обработка ошибок
import fs from 'fs';

export const move = (filepath1, filepath2, cb) => {
  fs.readFile(filepath1, 'utf8', (err, data) => {
    if (err) return cb(err);
    fs.writeFile(filepath2, data, 'utf8', (err, data) => {
      if (err) return cb(err);
      fs.unlink(filepath1, (err) => {
        if (err) return cb(err);
        cb(null);
      });
    });
  });
};

move('test.txt', 'test2.txt', (error) => {
  if (error) {
    console.log('oops');
    return;
  }
  console.log('yes!');
});
