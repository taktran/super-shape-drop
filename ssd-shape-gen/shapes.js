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

shapes.circle = getCircle();
shapes.triangle = getTriangle();
shapes.square = getSquare();
shapes.hexagon = getHexagon();

module.exports = shapes;
