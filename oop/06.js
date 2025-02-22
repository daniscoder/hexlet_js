// 6. Конструктор
function getX() {
  return this.x;
}

function getY() {
  return this.y;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}

function getBeginPoint() {
  return this.beginPoint;
}

function getEndPoint() {
  return this.endPoint;
}

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

function reverse(segment) {
  return new Segment(
    new Point(segment.getEndPoint().getX(), segment.getEndPoint().getY()),
    new Point(segment.getBeginPoint().getX(), segment.getBeginPoint().getY()),
  );
}

const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

const segment = new Segment(beginPoint, endPoint);
const reversedSegment = reverse(segment);

// прямое обращение к свойствам приведено только в демонстрационных целях
console.log(segment.beginPoint.x, segment.beginPoint.y, segment.endPoint.x, segment.endPoint.y); // => 1 10 11 -3

console.log(
  reversedSegment.beginPoint.x,
  reversedSegment.beginPoint.y,
  reversedSegment.endPoint.x,
  reversedSegment.endPoint.y,
); // => 11 -3 1 10

console.log(reversedSegment.getBeginPoint().getX());
