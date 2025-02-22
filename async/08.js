// 8. Таймеры
import fs from 'fs';

const watch = (filepath, interval, cb) => {
  let lastUpd = Date.now();
  const id = setInterval(() => {
    fs.stat(filepath, (error2, stats) => {
      if (error2) {
        clearInterval(id);
        cb(error2);
        return;
      }
      if (stats.mtimeMs > lastUpd) {
        lastUpd = stats.mtimeMs;
        cb(null);
      }
    });
  }, interval);
  return id;
};

const id = watch('test.txt', 500, (err) => {
  console.log(err, 'Wow!');
});

setTimeout(() => fs.appendFileSync('test.txt', 'ehu'), 700);
setTimeout(() => clearInterval(id), 5000); // остановить отслеживание через 5 секунд
