// 14. Async/Await
import fsp from 'fs/promises';

export const exchange = async (filepath1, filepath2) => {
  const data1 = await fsp.readFile(filepath1, 'utf-8');
  const data2 = await fsp.readFile(filepath2, 'utf-8');
  await fsp.writeFile(filepath1, data2);
  await fsp.writeFile(filepath2, data1);
};

exchange('test1.txt', 'test2.txt');
