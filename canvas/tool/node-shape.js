const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("1.html"),
  crlfDelay: Infinity,
});

const output = fs.createWriteStream("1.txt");

function adjustCoordinates(line) {
  // const coordinatePattern = /ctx\.(moveTo|lineTo|bezierCurveTo|arc|lineTo|translate|closePath|beginPath)\s*\(([\s\d.,-]*)\)/g;
  const coordinatePattern = /ctx\.(moveTo|lineTo|bezierCurveTo|arc|lineTo)\s*\(([\s\d.,-]*)\)/g;
  const matches = line.matchAll(coordinatePattern);

  for (const match of matches) {
    const fullMatch = match[0];
    const method = match[1];
    const coordsStr = match[2];
    if (coordsStr == "") {
      output.write(`["${method}"],\n`);
      return;
    }
    const newCoordsStr = coordsStr
      .split(",")
      .map((coord) => (+coord.trim()).toFixed(1))
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
