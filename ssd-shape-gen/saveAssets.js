const fs = require("fs");
const paper = require("paper-jsdom-canvas");

const getShapefile = (collisionPath) => {
  let shapefile = "";

  shapefile += `shape_type: TYPE_HULL\n`;

  collisionPath.segments.forEach((segment) => {
    const p = segment.point;

    shapefile += `data: ${p.x.toFixed(2)}\n`;
    shapefile += `data: ${p.y.toFixed(2)}\n`;
    shapefile += `data: ${(0).toFixed(2)}\n`;
  });

  return shapefile;
};

const saveAssets = ({
  width,
  height,
  fileName,
  colorName,
  drawItem,
  collisionPath,
}) => {
  const canvas = paper.createCanvas(width, height, "png");

  const imageFilePath = `./assets/images/${fileName}-${colorName}.png`;
  const shapeFilePath = `./assets/shapefiles/${fileName}.convexshape`;

  paper.setup(canvas);
  paper.view.translate(width / 2, height / 2);

  paper.project.activeLayer.addChild(drawItem);

  paper.view.update();

  fs.writeFileSync(imageFilePath, canvas.toBuffer());
  fs.writeFileSync(shapeFilePath, getShapefile(collisionPath));

  console.log(`${imageFilePath} saved!`);
  console.log(`${shapeFilePath} saved!`);
};

module.exports = saveAssets;
