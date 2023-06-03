// let canvas = document.querySelector("canvas");
// let ctx = canvas.getContext("2d");

// let objArray = [];
// let paused = false;
// let bumped = false;

// let leftHeld = false;
// let upHeld = false;
// let rightHeld = false;
// let downHeld = false;
// let arrowControlSpeed = 0.25;

// let gravityOn = true;

// let clearCanv = true;

// let bigBalls = false;

// let lastTime = new Date().getTime();
// let currentTime = 0;
// let dt = 0;

// let numStartingSmallBalls = 235;
// let numStartingBigBalls = 8;

// class Ball {
//   constructor(x, y, radius) {
//     this.radius = radius;
//     this.x = x;
//     this.y = y;

//     this.dx = randomDx();
//     this.dy = randomDy();

//     // mass is that of a sphere as opposed to circle
//     // it *does* make a difference in how realistic it looks
//     // this.mass = this.radius * this.radius * this.radius;
//     this.mass = this.radius;
//     this.color = randomColor();
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.arc(
//       Math.round(this.x),
//       Math.round(this.y),
//       this.radius,
//       0,
//       2 * Math.PI
//     );
//     ctx.fillStyle = this.color;
//     ctx.fill();
//     ctx.strokeStyle = "rgba(0, 0, 0, 0.6)";
//     ctx.stroke();
//     ctx.closePath();
//   }

//   speed() {
//     // magnitude of velocity vector
//     return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
//   }
//   angle() {
//     // velocity's angle with the x axis
//     return Math.atan2(this.dy, this.dx);
//   }
//   onGround() {
//     return this.y + this.radius >= canvas.height;
//   }
// }

// function distanceNextFrame(a, b) {
//   return (
//     Math.sqrt((a.x + a.dx - b.x - b.dx) ** 2 + (a.y + a.dy - b.y - b.dy) ** 2) -
//     a.radius -
//     b.radius
//   );
// }

// function distance(a, b) {
//   return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
// }

// function wallCollision(ball) {
//   if (
//     ball.x - ball.radius + ball.dx < 0 ||
//     ball.x + ball.radius + ball.dx > canvas.width
//   ) {
//     ball.dx *= -1;
//   }
//   if (
//     ball.y - ball.radius + ball.dy < 0 ||
//     ball.y + ball.radius + ball.dy > canvas.height
//   ) {
//     ball.dy *= -1;
//   }
//   if (ball.y + ball.radius > canvas.height) {
//     ball.y = canvas.height - ball.radius;
//   }
//   if (ball.y - ball.radius < 0) {
//     ball.y = ball.radius;
//   }
//   if (ball.x + ball.radius > canvas.width) {
//     ball.x = canvas.width - ball.radius;
//   }
//   if (ball.x - ball.radius < 0) {
//     ball.x = ball.radius;
//   }
// }

// function ballCollision() {
//   for (let i = 0; i < objArray.length - 1; i++) {
//     for (let j = i + 1; j < objArray.length; j++) {
//       let ob1 = objArray[i];
//       let ob2 = objArray[j];
//       let dist = distance(ob1, ob2);

//       if (dist < ob1.radius + ob2.radius) {
//         let theta1 = ob1.angle();
//         let theta2 = ob2.angle();
//         let phi = Math.atan2(ob2.y - ob1.y, ob2.x - ob1.x);
//         let m1 = ob1.mass;
//         let m2 = ob2.mass;
//         let v1 = ob1.speed();
//         let v2 = ob2.speed();

//         let dx1F =
//           ((v1 * Math.cos(theta1 - phi) * (m1 - m2) +
//             2 * m2 * v2 * Math.cos(theta2 - phi)) /
//             (m1 + m2)) *
//             Math.cos(phi) +
//           v1 * Math.sin(theta1 - phi) * Math.cos(phi + Math.PI / 2);
//         let dy1F =
//           ((v1 * Math.cos(theta1 - phi) * (m1 - m2) +
//             2 * m2 * v2 * Math.cos(theta2 - phi)) /
//             (m1 + m2)) *
//             Math.sin(phi) +
//           v1 * Math.sin(theta1 - phi) * Math.sin(phi + Math.PI / 2);
//         let dx2F =
//           ((v2 * Math.cos(theta2 - phi) * (m2 - m1) +
//             2 * m1 * v1 * Math.cos(theta1 - phi)) /
//             (m1 + m2)) *
//             Math.cos(phi) +
//           v2 * Math.sin(theta2 - phi) * Math.cos(phi + Math.PI / 2);
//         let dy2F =
//           ((v2 * Math.cos(theta2 - phi) * (m2 - m1) +
//             2 * m1 * v1 * Math.cos(theta1 - phi)) /
//             (m1 + m2)) *
//             Math.sin(phi) +
//           v2 * Math.sin(theta2 - phi) * Math.sin(phi + Math.PI / 2);

//         ob1.dx = dx1F;
//         ob1.dy = dy1F;
//         ob2.dx = dx2F;
//         ob2.dy = dy2F;

//         staticCollision(ob1, ob2);
//       }
//     }
//     wallCollision(objArray[i]);
//   }

//   if (objArray.length > 0) wallCollision(objArray[objArray.length - 1]);
// }

// function staticCollision(ob1, ob2, emergency = false) {
//   let overlap = ob1.radius + ob2.radius - distance(ob1, ob2);
//   let smallerObject = ob1.radius < ob2.radius ? ob1 : ob2;
//   let biggerObject = ob1.radius > ob2.radius ? ob1 : ob2;

//   // When things go normally, this line does not execute.
//   // "Emergency" is when staticCollision has run, but the collision
//   // still hasn't been resolved. Which implies that one of the objects
//   // is likely being jammed against a corner, so we must now move the OTHER one instead.
//   // in other words: this line basically swaps the "little guy" role, because
//   // the actual little guy can't be moved away due to being blocked by the wall.
//   if (emergency) [smallerObject, biggerObject] = [biggerObject, smallerObject];

//   let theta = Math.atan2(
//     biggerObject.y - smallerObject.y,
//     biggerObject.x - smallerObject.x
//   );
//   smallerObject.x -= overlap * Math.cos(theta);
//   smallerObject.y -= overlap * Math.sin(theta);

//   if (distance(ob1, ob2) < ob1.radius + ob2.radius) {
//     // we don't want to be stuck in an infinite emergency.
//     // so if we have already run one emergency round; just ignore the problem.
//     if (!emergency) staticCollision(ob1, ob2, true);
//   }
// }

// function applyGravity() {
//   for (let obj in objArray) {
//     let ob = objArray[obj];
//     if (ob.onGround() == false) {
//       ob.dy += 0.29;
//     }

//     // apply basic drag
//     ob.dx *= 0.99;
//     ob.dy *= 0.975;
//   }
// }

// function moveObjects() {
//   for (let i = 0; i < objArray.length; i++) {
//     let ob = objArray[i];
//     ob.x += ob.dx * dt;
//     ob.y += ob.dy * dt;
//   }
// }

// function drawObjects() {
//   for (let obj in objArray) {
//     objArray[obj].draw();
//   }
// }

// function draw() {
//   currentTime = new Date().getTime();
//   dt = (currentTime - lastTime) / 1000; // delta time in seconds

//   // dirty and lazy solution
//   // instead of scaling up every velocity vector the program
//   // we increase the speed of time
//   dt *= 50;

//   if (clearCanv) clearCanvas();
//   canvasBackground();

//   if (!paused) {
//     // arrowControls();
//     if (gravityOn) {
//       applyGravity(); // (and drag)
//     }
//     moveObjects();
//     ballCollision();
//   }

//   drawObjects();

//   //logger();

//   lastTime = currentTime;
//   window.requestAnimationFrame(draw);
// }
// function canvasBackground() {
//   canvas.style.backgroundColor = "rgb(215, 235, 240)";
// }
// function clearCanvas() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// }
// function randomColor() {
//   let red = Math.floor(Math.random() * 3) * 127;
//   let green = Math.floor(Math.random() * 3) * 127;
//   let blue = Math.floor(Math.random() * 3) * 127;

//   // dim down the small balls
//   if (!bigBalls) {
//     red *= 0.65;
//     green *= 0.65;
//     blue *= 0.65;
//   }

//   let rc = "rgb(" + red + ", " + green + ", " + blue + ")";
//   return rc;
// }

// function randomX() {
//   let x = Math.floor(Math.random() * canvas.width);
//   if (x < 30) {
//     x = 30;
//   } else if (x + 30 > canvas.width) {
//     x = canvas.width - 30;
//   }
//   return x;
// }

// function randomY() {
//   let y = Math.floor(Math.random() * canvas.height);
//   if (y < 30) {
//     y = 30;
//   } else if (y + 30 > canvas.height) {
//     y = canvas.height - 30;
//   }
//   return y;
// }

// function randomRadius() {
//   if (bigBalls) {
//     let r = Math.ceil(Math.random() * 10 + 20);
//     return r;
//   } else {
//     let r = Math.ceil(Math.random() * 2 + 2);
//     //let r = 5;
//     return r;
//   }
// }

// function randomDx() {
//   let r = Math.floor(Math.random() * 10 - 4);
//   return r;
// }

// function randomDy() {
//   let r = Math.floor(Math.random() * 10 - 3);
//   return r;
// }

// // spawn the initial small thingies.
// for (i = 0; i < numStartingSmallBalls; i++) {
//   objArray[objArray.length] = new Ball(randomX(), randomY(), randomRadius());
// }

// // manually spawn the few large ones that
// // start with no velocity. (lazy code)
// for (i = 0; i < numStartingBigBalls; i++) {
//   let temp = new Ball(randomX(), randomY(), randomRadius());
//   temp.dx = randomDx() / 8;
//   temp.dy = randomDy() / 12;
//   objArray[objArray.length] = temp;
// }

// draw();

// // // Initial Setup
// // const canvas = document.querySelector("canvas");
// // const c = canvas.getContext("2d");
// // const { abs } = Math;

// // canvas.width = innerWidth;
// // canvas.height = innerHeight;

// // // Variables
// // var gravity = 0.6;
// // var friction = 0.1;
// // var renderCount = 0;

// // // Utility Functions

// // // Objects
// // function Char(x, y, dx, dy, radius) {
// //   this.x = x;
// //   this.y = y;
// //   this.dx = dx;
// //   this.dy = dy;
// //   this.radius = radius;
// //   //
// //   this.char = randItem(Chars);

// //   this.update = function () {
// //     this.x += this.dx;
// //     this.y += this.dy;
// //     // (this.y + this.radius + this.dy, canvas.height-2)
// //     // apply friction
// //     if (this.y + this.radius + this.dy > canvas.height - 2) {
// //       this.dy = -this.dy;
// //       this.dy = this.dy * friction;
// //       this.dx = this.dx * friction;
// //     }
// //     // apply gravity
// //     else {
// //       this.dy += gravity;
// //     }

// //     // prevents from overflowing x axis
// //     // /**
// //     if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
// //       this.dx = -this.dx * friction;
// //     }
// //     // */

// //     // collision detection
// //     if (renderCount > 100)
// //       for (let i = 0; i < charArray.length; i++) {
// //         let otherChar = charArray[i];
// //         let dist = distance(this, otherChar);

// //         if (dist < this.radius + otherChar.radius) {
// //           let theta1 = ob1.angle();
// //           let theta2 = ob2.angle();
// //           let phi = Math.atan2(ob2.y - ob1.y, ob2.x - ob1.x);
// //           let m1 = 1;
// //           let m2 = 1;
// //           let v1 = ob1.speed();
// //           let v2 = ob2.speed();

// //           let dx1F =
// //             ((v1 * Math.cos(theta1 - phi) * (m1 - m2) +
// //               2 * m2 * v2 * Math.cos(theta2 - phi)) /
// //               (m1 + m2)) *
// //               Math.cos(phi) +
// //             v1 * Math.sin(theta1 - phi) * Math.cos(phi + Math.PI / 2);
// //           let dy1F =
// //             ((v1 * Math.cos(theta1 - phi) * (m1 - m2) +
// //               2 * m2 * v2 * Math.cos(theta2 - phi)) /
// //               (m1 + m2)) *
// //               Math.sin(phi) +
// //             v1 * Math.sin(theta1 - phi) * Math.sin(phi + Math.PI / 2);
// //           let dx2F =
// //             ((v2 * Math.cos(theta2 - phi) * (m2 - m1) +
// //               2 * m1 * v1 * Math.cos(theta1 - phi)) /
// //               (m1 + m2)) *
// //               Math.cos(phi) +
// //             v2 * Math.sin(theta2 - phi) * Math.cos(phi + Math.PI / 2);
// //           let dy2F =
// //             ((v2 * Math.cos(theta2 - phi) * (m2 - m1) +
// //               2 * m1 * v1 * Math.cos(theta1 - phi)) /
// //               (m1 + m2)) *
// //               Math.sin(phi) +
// //             v2 * Math.sin(theta2 - phi) * Math.sin(phi + Math.PI / 2);

// //           ob1.dx = dx1F;
// //           ob1.dy = dy1F;
// //           ob2.dx = dx2F;
// //           ob2.dy = dy2F;
// //         }
// //       }

// //     // this.x += this.dx;
// //     // this.y += this.dy;
// //     this.draw();
// //     // renderCount++;
// //   };

// //   this.draw = function () {
// //     // let adjustXY = this.radius / 2;
// //     // c.beginPath();
// //     // c.font = `${this.radius * 2}px merriweather`;
// //     // c.fillText(this.char, this.x - adjustXY * 1.5, this.y + adjustXY);
// //     // c.closePath();
// //     // // create bubble
// //     c.beginPath();
// //     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
// //     c.fillStyle = "#000";
// //     c.stroke();
// //     c.closePath();
// //   };
// // }

// // // Implementation
// // var charArray = [];

// // function init() {
// //   charArray = [];

// //   for (let i = 0; i < 10; i++) {
// //     let radius = randInt(16, 8),
// //       // x = randInt(canvas.width - radius, radius),
// //       y = randInt(canvas.height - radius),
// //       dx = randInt(-3, 3),
// //       dy = randInt(-2, 2);
// //     charArray.push(new Char(300, y, dx, dy, radius));
// //   }
// // }

// // // Animation Loop
// // function animate() {
// //   requestAnimationFrame(animate);

// //   c.clearRect(0, 0, canvas.width, canvas.height);

// //   for (let i = 0; i < charArray.length; i++) {
// //     charArray[i].update();
// //   }
// // }

// // function distance(a, b) {
// //   return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
// // }

// // init();
// // animate();
