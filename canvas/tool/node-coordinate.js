const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("leaf.html"),
  crlfDelay: Infinity,
});

const output = fs.createWriteStream("leaf2.html");

function adjustCoordinates(line) {
  const coordinatePattern =
    /ctx\.(moveTo|lineTo|bezierCurveTo)\s*\(([\s\d.,-]+)\)/g;

  return line.replace(coordinatePattern, (match, method, coordsStr) => {
    const coords = coordsStr
      .split(",")
      .map((coord) => parseFloat(coord.trim()));
    let adjustedCoords = [];

    switch (method) {
      case "moveTo":
      case "lineTo":
        adjustedCoords.push(
          Math.round(coords[0] * 10),
          Math.round(coords[1] * 10)
        );
        break;
      case "bezierCurveTo":
        for (let i = 0; i < coords.length; i += 2) {
          adjustedCoords.push(
            Math.round(coords[i] * 10),
            Math.round(coords[i + 1] * 10)
          );
        }
        break;
    }

    const newCoordsStr = adjustedCoords.join(", ");

    return `ctx.${method}(${newCoordsStr})`;
  });
}

rl.on("line", (line) => {
  const adjustedLine = adjustCoordinates(line);

  output.write(adjustedLine + "\n");
});

rl.on("close", () => {
  console.log("Processing completed.");
  output.end();
});
