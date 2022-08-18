const fs = require("fs");
const paper = require("paper-jsdom-canvas");

const canvas = {
  width: 500,
  height: 500,
  format: "png",
};

let hex;

const setup = () => {
  canvas.el = paper.createCanvas(canvas.width, canvas.height, canvas.format);

  paper.setup(canvas.el);

  paper.view.translate(canvas.width / 2, canvas.height / 2);

  canvas.center = new paper.Point(0, 0);
};

const draw = () => {
  const unit = (n) => {
    return (n * canvas.width) / 10;
  };

  hex = new paper.Path({
    closed: true,
    fillColor: "#f09",
  });

  for (let i = 0; i < 6; i++) {
    let p = canvas.center.clone();

    p.x += unit(3);

    p = p.rotate((360 / 6) * i, canvas.center);

    hex.add(p);
  }
};

const saveImage = (filePath) => {
  paper.view.update();

  fs.writeFileSync(filePath, canvas.el.toBuffer());

  console.log(`${filePath} saved!`);
};

const saveShapeFile = (filePath, path) => {
  let content = "";

  content += `shape_type: TYPE_HULL\n`;

  path.segments.forEach((segment) => {
    const p = segment.point;

    content += `data: ${p.x.toFixed(2)}\n`;
    content += `data: ${p.y.toFixed(2)}\n`;
    content += `data: ${(0).toFixed(2)}\n`;
  });

  fs.writeFileSync(filePath, content);

  console.log(`${filePath} saved!`);
};

setup();
draw();

saveImage("./assets/images/hex.png");
saveShapeFile("./assets/shapefiles/hex.convexshape", hex);
