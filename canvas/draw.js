export function draw(ctx, fillColor, path) {
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  for (let segment of path) {
    if (segment[0] === "moveTo") {
      ctx.moveTo(segment[1], segment[2]);
    } else if (segment[0] === "bezierCurveTo") {
      ctx.bezierCurveTo(...segment.slice(1));
    }
  }
  ctx.closePath();
  ctx.fill("evenodd");
}
