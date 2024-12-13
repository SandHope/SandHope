export function draw(ctx, fillColor, path) {
  ctx.fillStyle = fillColor;
  ctx.beginPath();
  for (let segment of path) {
    ctx[segment[0]](...segment.slice(1));
  }
  ctx.closePath();
  ctx.fill("evenodd");
}
