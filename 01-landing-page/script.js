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
}
Init();

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
