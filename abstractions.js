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
// const makeDecartPoint = (x, y) => {
//   return { x, y };
// };
//
// const getX = (point) => point.x;
//
// const getY = (point) => point.y;
//
// const getQuadrant = (point) => {
//   const x = getX(point);
//   const y = getY(point);
//
//   if (x > 0 && y > 0) {
//     return 1;
//   }
//   if (x < 0 && y > 0) {
//     return 2;
//   }
//   if (x < 0 && y < 0) {
//     return 3;
//   }
//   if (x > 0 && y < 0) {
//     return 4;
//   }
//
//   return null;
// };
//
// const makeRectangle = (point, width, height) => ({ point, width, height });
//
// const getStartPoint = (rectangle) => rectangle.point;
//
// const getWidth = (rectangle) => rectangle.width;
//
// const getHeight = (rectangle) => rectangle.height;
//
// const containsOrigin = (rectangle) => {
//   const point = getStartPoint(rectangle);
//   const x1 = getX(point);
//   const y1 = getY(point);
//   const x2 = getX(point) + getWidth(rectangle);
//   const y2 = getY(point) - getHeight(rectangle);
//   const quadrantList = [
//     getQuadrant(point),
//     getQuadrant(makeDecartPoint(x2, y1)),
//     getQuadrant(makeDecartPoint(x1, y2)),
//     getQuadrant(makeDecartPoint(x2, y2)),
//   ];
//   // console.log(quadrantList);
//   return quadrantList.sort().join('') === '1234';
// };
//
// const p = makeDecartPoint(0, 1);
// const rectangle = makeRectangle(p, 4, 5);
//
// console.log(containsOrigin(rectangle)); // false
// console.log(getWidth(rectangle)); // 4
//
// const rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);
// console.log(containsOrigin(rectangle2)); // true

// 8. Инварианты
const makeRational = (number, denom) => {
  for (let normValue = Math.min(Math.abs(number), Math.abs(denom)); normValue > 0; normValue -= 1) {
    if (number % normValue === 0 && denom % normValue === 0) {
      return { number: number / normValue, denom: denom / normValue };
    }
  }
  return { number, denom };
};

const getNumer = (rational) => rational.number;

const getDenom = (rational) => rational.denom;

const add = (rational1, rational2) => {
  const number = getNumer(rational1) * getDenom(rational2)
    + getNumer(rational2) * getDenom(rational1);
  const demon = getDenom(rational1) * getDenom(rational2);
  return makeRational(number, demon);
};

const sub = (rational1, rational2) => {
  const number = getNumer(rational1) * getDenom(rational2)
    - getNumer(rational2) * getDenom(rational1);
  const demon = getDenom(rational1) * getDenom(rational2);
  return makeRational(number, demon);
};

const ratToString = (rat) => `${getNumer(rat)}/${getDenom(rat)}`;

const rat1 = makeRational(-4, 16);
console.log(rat1);
console.log(getNumer(rat1)); // 1
console.log(getDenom(rat1)); // 3

const rat2 = makeRational(12, 5);
console.log(rat2);

const rat3 = add(rat1, rat2);
console.log(rat3);
ratToString(rat3); // '11/3'

const rat4 = sub(rat1, rat2);
console.log(rat4);
ratToString(rat4); // '-3/1'
