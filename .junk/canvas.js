// // variables
// var { PI } = Math;
// var canvas = $("canvas");
// var ctx = canvas.getContext("2d");
// var cw = window.innerWidth;
// var ch = window.innerHeight;

// var gravity = 1;
// var friction = 0.9;

// var Objs = [];
// var noOfObjs = 100;

// // utility
// var updateCanvasBackgroundColor = () => (canvas.style.background = "#000");
// var clearCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height);
// var drawObj = (obj) => {
//   let { x, y, r, d, char } = obj;
//   ctx.beginPath();
//   ctx.arc(x, y, r, 0, PI * 2);
//   ctx.stroke();
//   ctx.closePath();

//   ctx.font = `${d}px merriweather`;
//   ctx.fillText(char, x - r / 2, y + r / 2);
// };
// var updateObj = (obj) => {
//   let { x, y, vx, vy, r, d } = obj;
//   if (y + r >= ch) obj.y += vy;
//   else obj.y += gravity + vy;
//   obj.x += vx;
//   return obj;
// };
// var detectObjCollision = (obj) => {
//   let { x, y, vx, vy, r, d } = obj;

//   // obj right collision
//   if (x + r >= cw) obj.vx = -vx;
//   // obj left collision
//   if (x - r <= 0) obj.vx = -vx;
//   // obj bottom collision
//   if (y + r >= ch) obj.vy = -vy * friction;
//   // obj top collision
//   if (y - r <= 0) obj.vy = -vy;

//   obj.vx *= friction;

//   return obj;
// };
// var updateCanvas = () => {
//   for (let i = noOfObjs; i >= 0; i--) {
//     Objs[i] = updateObj(Objs[i]);
//     drawObj(Objs[i]);
//     Objs[i] = detectObjCollision(Objs[i]);
//   }
// };
// class Obj {
//   constructor() {
//     this.d = randInt(24, 12);
//     this.r = this.d / 2;
//     this.x = randInt(cw - this.d);
//     this.y = randInt(ch - this.d);
//     this.char = randChar();
//     this.vx = random();
//     this.vy = randInt(5);
//     // this.angle = randInt(360);
//   }
// }

// var animation = {
//   init: () => {
//     canvas.width = cw;
//     canvas.height = ch;
//     // updateCanvasBackgroundColor();
//     clearCanvas();
//     for (let i = noOfObjs; i >= 0; i--) Objs.push(new Obj());
//     updateCanvas();
//   },
//   loop: () => {
//     clearCanvas();
//     //  for (let i = noOfObjs; i >= 0; i--) Objs.push(new Obj());
//     updateCanvas();
//   },
//   stop: () => {},
// };
// animation.init();
// setInterval(animation.loop, 1000 / 60);
// // requestAnimationFrame(animation.loop);
