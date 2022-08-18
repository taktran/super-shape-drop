const fs = require("fs");

const saveShapefile = (filename, path) => {
  let filePath = `./assets/shapefiles/${filename}.convexshape`;
  let shapefile = "";

  let flipper =
    filename === "rightTriangle" || filename === "trapezoid" ? 1 : -1;

  shapefile += `shape_type: TYPE_HULL\n`;

  path.segments.forEach((segment) => {
    const p = segment.point;

    shapefile += `data: ${(p.x * flipper).toFixed(2)}\n`;
    shapefile += `data: ${(p.y * flipper).toFixed(2)}\n`;
    shapefile += `data: ${(0).toFixed(2)}\n`;
  });

  fs.writeFileSync(filePath, shapefile);

  console.log(`${filePath} saved!`);
};

module.exports = saveShapefile;
