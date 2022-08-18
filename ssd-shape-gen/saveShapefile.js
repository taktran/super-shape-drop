const fs = require("fs");

const saveShapefile = (filename, path) => {
  let filePath = `./assets/shapefiles/${filename}.convexshape`;
  let shapefile = "";

  shapefile += `shape_type: TYPE_HULL\n`;

  path.segments.forEach((segment) => {
    const p = segment.point;

    shapefile += `data: ${p.x.toFixed(2)}\n`;
    shapefile += `data: ${(p.y * -1).toFixed(2)}\n`;
    shapefile += `data: ${(0).toFixed(2)}\n`;
  });

  fs.writeFileSync(filePath, shapefile);

  console.log(`${filePath} saved!`);
};

module.exports = saveShapefile;
