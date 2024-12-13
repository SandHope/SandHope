import { draw } from "./draw.js";
import { wood } from "../shape/wood.js";
import { sand } from "../shape/sand.js";
import { root } from "../shape/root.js";

export function drawDune(ctx) {
  draw(ctx, sand.fillColor, sand.path);
  draw(ctx, wood.fillColor, wood.path);
  draw(ctx, root.fillColor, root.path);
}
