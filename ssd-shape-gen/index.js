const fs = require("fs");
const paper = require("paper-jsdom-canvas");

const canvas = {
  width: 500,
  height: 500,
  format: "png",
};

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

  const hex = new paper.Path({
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

const saveFile = (filePath) => {
  paper.view.update();

  fs.writeFileSync(filePath, canvas.el.toBuffer());

  console.log(`${filePath} saved!`);
};

setup();
draw();
saveFile("./assets/images/hex.png");
