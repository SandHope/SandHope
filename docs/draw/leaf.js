import { leafShapes } from "../shape/leaf.js";
import { draw } from "./draw.js";
import { getRotateAngle } from "../util/util.js";

export function drawLeaf(ctx) {
  ctx.translate(57.3, 108);
  ctx.rotate((getRotateAngle() * Math.PI) / 180);
  ctx.translate(-57.3, -108);
  for (const shape of leafShapes) {
    draw(ctx, shape.fillColor, shape.path);
  }
}
