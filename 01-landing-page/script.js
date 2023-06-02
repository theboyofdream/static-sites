// Variables
const { round, random, floor } = Math;
const $ = (selector) => document.querySelector(selector);
const Emotes = [
  `^_~`,
  `^_^`,
  `>"<`,
  `U_U`,
  `O.O`,
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
  emote: () => ($('#emote').innerText = randItem(Emotes)),
};

function Init() {
  update.emote();
}
Init();

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
