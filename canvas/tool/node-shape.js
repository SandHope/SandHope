const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("sand.html"),
  crlfDelay: Infinity,
});

const output = fs.createWriteStream("sand.txt");

function adjustCoordinates(line) {
  const coordinatePattern =
    /ctx\.(moveTo|lineTo|bezierCurveTo)\s*\(([\s\d.,-]+)\)/g;
  const matches = line.matchAll(coordinatePattern);

  for (const match of matches) {
    const fullMatch = match[0];
    const method = match[1];
    const coordsStr = match[2];
    const newCoordsStr = coordsStr
      .split(",")
      .map((coord) => Math.round(coord.trim()))
      .join(", ");
    //   console.log(match);
    output.write(`["${method}", ${newCoordsStr}],\n`);
  }
}

rl.on("line", (line) => {
  adjustCoordinates(line);
});

rl.on("close", () => {
  console.log("Processing completed.");
  output.end();
});
