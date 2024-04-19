// 3. Точки на координатной плоскости
// const calculateDistance = (point1, point2) => {
//   const [x1, y1, x2, y2] = [...point1, ...point2];
//   return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
// };
//
// const point1 = [0, 0];
// const point2 = [3, 4];
// console.log(calculateDistance(point1, point2));

// 4. Семантика массивов
// const getMidpoint = (point1, point2) => ({
//   x: (point1.x + point2.x) / 2,
//   y: (point1.y + point2.y) / 2,
// });
//
// const point1 = { x: 0, y: 0 };
// const point2 = { x: 4, y: 4 };
// console.log(getMidpoint(point1, point2)); // => { x: 2, y: 2 };

// 5. Создание абстракции
const makeDecartPoint = (x, y) => {
  return { x, y };
};

const getX = (point) => point.x;

const getY = (point) => point.y;

const makeSegment = (beginPoint, endPoint) => ({ beginPoint, endPoint });

const getMidpointOfSegment = (segment) =>
  makeDecartPoint(
    (getX(segment.beginPoint) + getX(segment.endPoint)) / 2,
    (getY(segment.beginPoint) + getY(segment.endPoint)) / 2,
  );

const getBeginPoint = (segment) => segment.beginPoint;

const getEndPoint = (segment) => segment.endPoint;

const beginPoint = makeDecartPoint(3, 2);
const endPoint = makeDecartPoint(0, 0);
const segment = makeSegment(beginPoint, endPoint);

console.log(getMidpointOfSegment(segment)); // (1.5, 1)
console.log(getBeginPoint(segment)); // (3, 2)
console.log(getEndPoint(segment)); // (0, 0)
