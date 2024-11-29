// 获取画布并设置样式
const canvas = document.getElementById("canvas");
canvas.style.border = "2px dashed red";
canvas.width = 500;
canvas.height = 500;

// 2D绘图上下文
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#000"; // 填充颜色
ctx.shadowColor = "#000"; // 阴影颜色
ctx.shadowBlur = 2; // 阴影模糊度

// 初始化树枝属性
let radius = canvas.width / 50; // 树枝半径
let x = canvas.width / 2 - radius;
let y = canvas.height; // 初始y坐标
let angle = Math.PI / 2; // 初始角度
let speed = canvas.width / 300; // 移动速度

// 绘制当前树枝
function draw() {
  //ctx.save();
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
  //ctx.closePath();
  ctx.fill();
  //ctx.restore();
}

// 更新树枝的位置和状态
function iterate() {
  radius -= 0.01; // 减小半径
  x -= radius < 9.3 ? (radius - 8.9) * 0.1 : 0.1; // 更新x坐标
  y -= speed * Math.sin(angle); // 更新y坐标
}

// 处理树枝的生命周期
function process() {
  draw(); // 绘制树枝
  iterate(); // 更新位置和状态
}

// 动画循环
function animate() {
  process();
  if (radius > 9) {
    requestAnimationFrame(animate);
  } else {
    addLeftLeaf();
    addRightLeaf();
  }
}

function addRightLeaf() {
  // 开始路径
  ctx.beginPath();
  ctx.arc(x, y - 50, 50, 0, Math.PI / 2, false);
  ctx.arc(x + 50, y, 50, Math.PI, (3 * Math.PI) / 2, false);
  ctx.fillStyle = "#8cce7f";
  ctx.fill();
  ctx.lineTo(x, y);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "blue";
  ctx.stroke();
}

function addLeftLeaf() {
  // 开始路径
  ctx.beginPath();
  ctx.arc(x, y - 50, 50, Math.PI / 2, Math.PI, false);
  ctx.arc(x - 50, y, 50, (3 * Math.PI) / 2, 2 * Math.PI, false);
  ctx.fillStyle = "#8cce7f";
  ctx.fill();
  ctx.lineTo(x-50, y-50);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "red";
  ctx.stroke();
}

// 开始动画
animate();
