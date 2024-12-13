export const leafShapes = [
  {
    fillColor: "#050505",
    path: [
      ["moveTo", 595, 1185],
      ["bezierCurveTo", 588, 1185, 582, 1185, 575, 1185],
      ["bezierCurveTo", 555, 1163, 537, 1140, 520, 1115],
      ["bezierCurveTo", 512, 964, 497, 814, 475, 665],
      ["bezierCurveTo", 311, 665, 182, 599, 90, 465],
      ["bezierCurveTo", 62, 408, 35, 352, 10, 295],
      ["bezierCurveTo", 5, 232, 3, 168, 5, 105],
      ["bezierCurveTo", 4, 69, 16, 39, 40, 15],
      ["bezierCurveTo", 339, -30, 516, 96, 570, 395],
      ["bezierCurveTo", 641, 257, 753, 172, 905, 140],
      ["bezierCurveTo", 1054, 106, 1204, 94, 1355, 105],
      ["bezierCurveTo", 1371, 134, 1385, 164, 1395, 195],
      ["bezierCurveTo", 1326, 415, 1190, 580, 985, 690],
      ["bezierCurveTo", 844, 739, 701, 748, 555, 715],
      ["bezierCurveTo", 563, 822, 584, 925, 620, 1025],
      ["bezierCurveTo", 632, 1083, 624, 1136, 595, 1185],
    ],
  },
  {
    fillColor: "#88CC78FC",
    path: [
      ["moveTo", 75, 35],
      ["bezierCurveTo", 235, 51, 360, 124, 450, 255],
      ["bezierCurveTo", 483, 342, 493, 432, 480, 525],
      ["bezierCurveTo", 409, 388, 306, 284, 170, 215],
      ["bezierCurveTo", 168, 220, 167, 225, 165, 230],
      ["bezierCurveTo", 276, 345, 376, 468, 465, 600],
      ["bezierCurveTo", 265, 573, 140, 462, 90, 265],
      ["bezierCurveTo", 72, 188, 67, 112, 75, 35],
    ],
  },
  {
    fillColor: "#88CC78FC",
    path: [
      ["moveTo", 1195, 155],
      ["bezierCurveTo", 1228, 155, 1262, 155, 1295, 155],
      ["bezierCurveTo", 1226, 460, 1036, 634, 725, 675],
      ["bezierCurveTo", 670, 675, 618, 662, 570, 635],
      ["bezierCurveTo", 616, 565, 675, 503, 745, 450],
      ["bezierCurveTo", 837, 402, 934, 365, 1035, 340],
      ["bezierCurveTo", 1049, 336, 1059, 328, 1065, 315],
      ["bezierCurveTo", 885, 301, 730, 358, 600, 485],
      ["bezierCurveTo", 650, 359, 738, 267, 865, 210],
      ["bezierCurveTo", 977, 194, 1087, 176, 1195, 155],
    ],
  },
].map((v) => {
  v.path = v.path.map((v) => [v[0], ...v.slice(1).map((v) => v / 10)]);
  return v;
});
