// Variables
const { round, random, floor } = Math;
const $ = (selector) => document.querySelector(selector);
const $all = (selector) => document.querySelectorAll(selector);
const Emotes = [
  `^_~`,
  `-_+`,
  `U_U`,
  `O.O`,
  `O_<`,
  `~_~`,
  `X_X`,
  `O_O`,
  `T_T`,
  `¬_¬`,
  `+_+`,
  `>_<`,
  `-_-`,
];
const Colors = [];

function randItem(arr) {
  const randomIndex = floor(random() * arr.length);
  return arr[randomIndex];
}

const update = {
  emote: () => {
    for (let i = 0; i < 5; i++)
      setTimeout(
        () => $('#emote').innerText = randItem(Emotes),
        100 * i);
  },
  lorem: () => {
    word = ""
    do { word = pickWord() }
    while (word.length <= 5);
    $('#lorem').innerText = word
  },
  compliment: () => {
    fetch("https://complimentr.com/api")
      .then(response => response.json())
      .then(({ compliment }) => $('#compliment').innerText = compliment)
  }
};

function Init() {
  update.emote();
  update.lorem();


  // $all(".page").forEach((page) => {
  //   console.log(window.innerWidth)
  //   page.style.width = window.innerWidth + "px"
  //   page.style.height = window.innerHeight + "px"
  // })
  update.compliment();

  window.onmousemove = cursor
  window.onblur = () => $("#cursor").style.opacity = 0
}
Init();

function cursor(e) {
  const cursor = $("#cursor")
  const target = e.target
  let newWidth = "1rem"
  if (target.classList.contains("hover")) {
    const { height } = target.getBoundingClientRect()
    console.log(height)
    newWidth = height + "px"
  }
  cursor.style.width = newWidth

  let cursorWidth = 0
  if (newWidth.includes("rem"))
    cursorWidth = parseInt(newWidth.replace("rem", "")) * 16
  else if (newWidth.includes("px"))
    cursorWidth = parseInt(newWidth.replace("px", ""))

  let x = (e.clientX - cursorWidth / 2).toFixed(0, 0)
  let y = (e.clientY - cursorWidth / 2).toFixed(0, 0)
  // console.log(x, y)
  cursor.style.opacity = "1"
  cursor.style.left = x + "px"
  cursor.style.top = y + "px"

  // cursor.style.width = (e.target.classList.contains("hover")) ? "3rem" : "1rem"
  // if(e.target.class)
}

// + " ↻"
// Create an anime object
// const animeObject = anime({
//   targets: '#flood-text',
//   opacity: 1,
//   translateX: '100vw',
//   duration: 2000,
//   easing: 'easeInOutQuad',
// });

// Start the animation
// animeObject.pause();
// console.log(anime());
