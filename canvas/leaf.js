import { leafShapes } from "./shape/leaf.js";
import { draw } from "./draw.js";
import { getRotateAngle } from "./utils.js";

export function drawLeaf(ctx) {
  ctx.translate(56.5, 105);
  ctx.rotate((getRotateAngle() * Math.PI) / 180);
  ctx.translate(-56.5, -105);

  for (const shape of leafShapes) {
    draw(ctx, shape.fillColor, shape.path);
  }
}
