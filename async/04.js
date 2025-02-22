// 4. Возврат в асинхронном коде
import fs from 'fs';

export default (filePath, data, cb) => {
  fs.writeFile(filePath, data, (_error, cbData) => {
    cb();
  });
};
