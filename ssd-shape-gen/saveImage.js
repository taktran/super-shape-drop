const fs = require("fs");
const paper = require("paper-jsdom-canvas");

const saveImage = ({ width, height, fileName, colorName, drawItem }) => {
  const canvas = paper.createCanvas(width, height, "png");

  const filePath = `./assets/images/${fileName}-${colorName}`;

  paper.setup(canvas);
  paper.view.translate(width / 2, height / 2);

  paper.project.activeLayer.addChild(drawItem);

  paper.view.update();

  fs.writeFileSync(filePath, canvas.toBuffer());

  console.log(`${filePath} saved!`);
};

module.exports = saveImage;
