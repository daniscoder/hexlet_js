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
// const makeDecartPoint = (x, y) => {
//   return { x, y };
// };
//
// const getX = (point) => point.x;
//
// const getY = (point) => point.y;
//
// const makeSegment = (beginPoint, endPoint) => ({ beginPoint, endPoint });
//
// const getMidpointOfSegment = (segment) =>
//   makeDecartPoint(
//     (getX(segment.beginPoint) + getX(segment.endPoint)) / 2,
//     (getY(segment.beginPoint) + getY(segment.endPoint)) / 2,
//   );
//
// const getBeginPoint = (segment) => segment.beginPoint;
//
// const getEndPoint = (segment) => segment.endPoint;
//
// const beginPoint = makeDecartPoint(3, 2);
// const endPoint = makeDecartPoint(0, 0);
// const segment = makeSegment(beginPoint, endPoint);
//
// console.log(getMidpointOfSegment(segment)); // (1.5, 1)
// console.log(getBeginPoint(segment)); // (3, 2)
// console.log(getEndPoint(segment)); // (0, 0)

// 6. Интерфейсы
// const makePoint = (x, y) => ({
//   angle: Math.atan2(y, x),
//   radius: Math.sqrt(x ** 2 + y ** 2),
// });
//
// const getRadius = (point) => point.radius;
//
// const getAngle = (point) => point.angle;
//
// const getX = (point) => Math.round(getRadius(point) * Math.cos(getAngle(point)));
//
// const getY = (point) => Math.round(getRadius(point) * Math.sin(getAngle(point)));
//
// const x = 4;
// const y = 8;
//
// // point хранит в себе данные в полярной системе координат
// const point = makePoint(x, y);
//
// // Здесь происходит преобразование из полярной в декартову
// console.log(getX(point)); // 4
// console.log(getY(point)); // 8

// 7. Уровневое проектирование
const makeDecartPoint = (x, y) => {
  const point = { x, y };
  return point;
};

const getX = (point) => point.x;

const getY = (point) => point.y;

const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  }
  if (x < 0 && y > 0) {
    return 2;
  }
  if (x < 0 && y < 0) {
    return 3;
  }
  if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

const makeRectangle = (point, width, height) => ({ point, width, height });

const getStartPoint = (rectangle) => rectangle.point;

const getWidth = (rectangle) => rectangle.width;

const getHeight = (rectangle) => rectangle.height;

const containsOrigin = (rectangle) => {
  const quadrantList = [1, 2, 3, 4];
  
};
