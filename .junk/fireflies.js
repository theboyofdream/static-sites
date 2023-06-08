const container = $("#fireflies-container");
const { height: ch, width: cw } = container.getBoundingClientRect();
const randInterval = (func, max) => {
  setInterval(() => {
    func();
    // randInterval(func);
  }, randInt(max));
};
// let Fireflies = [];
const fireflyCount = 10;

var addFirefly = (id) => {
  let span = document.createElement("span");

  span.classList.add("firefly");
  span.id = id;

  span.style.top = randInt(ch) + "px";
  span.style.left = randInt(cw) + "px";
  span.style.animationDelay = randInt(5000);
  // span.style.translate
  container.appendChild(span);
};

function moveFirefly(fireflyId) {
  let firefly = document.querySelector(`#${fireflyId}`);

  // fireflies.forEach((firefly) => {
  firefly.style.left = `${randInt(cw)}px`;
  firefly.style.top = `${randInt(ch)}px`;
  // });
  console.log(firefly, "oopss");
}

function glowFirefly(fireflyId) {
  let firefly = document.querySelector(`#${fireflyId}`);
  firefly.classList.add("glow");
  setTimeout(() => firefly.classList.remove("glow"), 6000);
}

for (let i = 0; i < fireflyCount; i++) {
  var uid = "firefly-" + i;
  addFirefly(uid);
  setInterval(() => {
    moveFirefly(uid);
    glowFirefly(uid);
    // console.log("oops");
  }, randInt(10000, 6000));
}
