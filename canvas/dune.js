import { draw } from "./draw.js";
import { wood } from "./shape/wood.js";
import { sand } from "./shape/sand.js";

export function drawDune(ctx) {
  draw(ctx, sand.fillColor, sand.path);
  draw(ctx, wood.fillColor, wood.path);
}
