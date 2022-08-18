const paper = require("paper-jsdom-canvas");

const shapes = {};

const size = {
  width: 100,
  height: 100,
};

const canvas = paper.createCanvas(size.width, size.height, "png");

paper.setup(canvas);
paper.view.translate(size.width / 2, size.height / 2);

const center = new paper.Point(0, 0);

const getCircle = () => {
  return new paper.Path.Circle({
    center,
    radius: 37.5,
  });
};

const getTriangle = () => {
  const triangle = new paper.Path({
    closed: true,
  });

  for (let i = 0; i < 3; i++) {
    let p = center.clone();

    p.x += 46;

    p = p.rotate((360 / 3) * i + 30, center);

    triangle.add(p);
  }

  return triangle;
};

const getSquare = () => {
  const radius = 35;

  return new paper.Path.Rectangle({
    from: [-radius, -radius],
    to: [radius, radius],
  });
};

const getHexagon = () => {
  const hexagon = new paper.Path({
    closed: true,
  });

  for (let i = 0; i < 6; i++) {
    let p = center.clone();

    p.x += 42;

    p = p.rotate((360 / 6) * i, center);

    hexagon.add(p);
  }

  return hexagon;
};

const getCross = () => {
  const r1 = 20;
  const r2 = 20;

  return new paper.Path({
    segments: [
      [0, -r1],
      [r2, -r1 - r2],
      [r1 + r2, -r2],
      [r1, 0],
      [r1 + r2, 0 + r2],
      [r2, r1 + r2],
      [0, r1],
      [0 - r2, r1 + r2],
      [-r1 - r2, 0 + r2],
      [-r1, 0],
      [-r1 - r2, 0 - r2],
      [0 - r2, -r1 - r2],
    ],
    closed: true,
  });
};

const getSpike = () => {
  const r1 = 15;
  const r2 = 50;

  return new paper.Path({
    segments: [
      [r1, -r1],
      [r2, 0],
      [r1, r1],
      [0, r2],
      [-r1, r1],
      [-r2, 0],
      [-r1, -r1],
      [0, -r2],
    ],
    closed: true,
  });
};

const getRightTriangle = () => {
  const r1 = 10;
  const r2 = 50;

  return new paper.Path({
    segments: [
      [-r2 + r1, -r2 + r1],
      [r2 - r1, r2 - r1],
      [-r2 + r1, r2 - r1],
    ],
    closed: true,
  });
};

const getDiamond = () => {
  const r1 = 25;
  const r2 = 50;

  return new paper.Path({
    segments: [
      [0, -r2],
      [r1, 0],
      [0, r2],
      [-r1, 0],
    ],
    closed: true,
  });
};

const getArrow = () => {
  const r1 = 20;
  const r2 = 45;

  return new paper.Path({
    segments: [
      [0, -r2],
      [r2, 0],
      [r1, 0],
      [r1, r2],
      [-r1, r2],
      [-r1, 0],
      [-r2, 0],
    ],
    closed: true,
  });
};

const getTrapezoid = () => {
  const r1 = 25;
  const r2 = 50;

  return new paper.Path({
    segments: [
      [-r1, -r1],
      [r2, -r1],
      [r1, r1],
      [-r2, r1],
    ],
    closed: true,
  });
};

const getSemiCircle = () => {
  const semiCircle = new paper.Path({
    closed: true,
  });

  for (let i = 0; i <= 10; i++) {
    let p = center.clone();

    p.x += 50;

    p = p.rotate((180 / 10) * i, center);

    semiCircle.add(p);
  }

  return semiCircle;
};

const getFork = () => {
  const r1 = 38;

  return new paper.Path({
    segments: [
      [r1, -r1],
      [r1, r1],
      [0, 0],
      [-r1, r1],
      [-r1, -r1],
    ],
    closed: true,
  });
};

shapes.circle = getCircle();
shapes.triangle = getTriangle();
shapes.square = getSquare();
shapes.hexagon = getHexagon();
shapes.cross = getCross();
shapes.spike = getSpike();
shapes.rightTriangle = getRightTriangle();
shapes.diamond = getDiamond();
shapes.arrow = getArrow();
shapes.trapezoid = getTrapezoid();
shapes.semiCircle = getSemiCircle();
shapes.fork = getFork();

module.exports = shapes;
