const paper = require("paper-jsdom-canvas");
// const saveAssets = require("./saveAssets.js");

const saveShapefile = require("./saveShapefile.js");
const saveImage = require("./saveImage.js");

const shapes = require("./shapes.js");

const size = {
  width: 100,
  height: 100,
};

// const canvas = paper.createCanvas(size.width, size.height, "png");

// paper.setup(canvas);
// paper.view.translate(size.width / 2, size.height / 2);

// const center = new paper.Point(0, 0);

// const hex = new paper.Path({
//   closed: true,
// });

// for (let i = 0; i < 6; i++) {
//   let p = center.clone();

//   p.x += 40;

//   p = p.rotate((360 / 6) * i, center);

//   hex.add(p);
// }

// const smoothHex = hex.clone();

// smoothHex.smooth({ type: "geometric", factor: 0.125 });

let colors = [
  {
    name: "darkblue",
    hex: "#4a407c",
  },
  {
    name: "lightblue",
    hex: "#6f88c8",
  },
  {
    name: "yellow",
    hex: "#f2ec9b",
  },
  {
    name: "orange",
    hex: "#f2bc79",
  },
  {
    name: "red",
    hex: "#f2856d",
  },
];

Object.keys(shapes).forEach((name) => {
  saveShapefile(name, shapes[name]);

  colors.forEach((color) => {
    shapes[name].fillColor = color.hex;

    saveImage({
      width: size.width,
      height: size.height,
      fileName: name,
      colorName: color.name,
      drawItem: shapes[name],
    });
  });
});
