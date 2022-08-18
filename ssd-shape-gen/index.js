const paper = require("paper-jsdom-canvas");
const saveAssets = require("./saveAssets.js");

const size = {
  width: 100,
  height: 100,
};

const canvas = paper.createCanvas(size.width, size.height, "png");

paper.setup(canvas);
paper.view.translate(size.width / 2, size.height / 2);

const center = new paper.Point(0, 0);

const hex = new paper.Path({
  closed: true,
});

for (let i = 0; i < 6; i++) {
  let p = center.clone();

  p.x += 40;

  p = p.rotate((360 / 6) * i, center);

  hex.add(p);
}

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

colors.forEach((color) => {
  hex.fillColor = color.hex;

  saveAssets({
    width: size.width,
    height: size.height,
    fileName: `hex`,
    colorName: color.name,
    drawItem: hex,
    collisionPath: hex,
  });
});
