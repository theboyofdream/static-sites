// Variables
const { round, random, floor } = Math;
const $ = (selector) => document.querySelector(selector);
const $all = (selector) => document.querySelectorAll(selector);
const replaceCharAt = (str, char, i) =>
  str.substring(0, i) + char + str.substring(i + 1);
const randInt = (max, min = 0) => floor(random() * (max - min)) + min;
const randItem = (arr) => arr[randInt(arr.length)];

const Emotes =
  `^_~ -_+ U_U O.O O_< ~_~ X_X O_O T_T ¬_¬ +_+ >_< -_- ಠ_ಠ ʕ•ᴥ•ʔ =＾● ⋏ ●＾= ~(˘▾˘~) o_O O.o *-* //_^ ~,~ [¬º-°]¬`.split(
    " "
  );
const LoremWords =
  "lorem ipsum dolor consectetur adipiscing Nullam viverra turpis facilisis iaculis Curabitur felis tempor euismod pretium imperdiet Pellentesque varius hendrerit vitae porttitor Lorem Morbi porta Suspendisse accumsan bibendum laoreet eleifend Aliquam cursus magna augue elementum Proin scelerisque tincidunt rhoncus auctor Donec nulla ultricies faucibus feugiat risus finibus tortor".split(
    " "
  );

const scrambleText =
  `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=[]\;',./~!@#$%^&*()_+{}|:"<>?`.split(
    ""
  );
// console.log(scrambleText);
// debugger;
function scramble(HTMLElement, text, times = randInt(15)) {
  setTimeout(() => (HTMLElement.innerText = text), (times + 1) * 100);

  for (times; times > 0; times--) {
    setTimeout(() => {
      let newText = "";
      for (let i = 0; i < text.length; i++) {
        newText += text.charAt(i) === " " ? " " : randItem(scrambleText);
      }
      // console.log(text);
      // console.log(newText);
      HTMLElement.innerText = newText;
    }, times * 100);
  }
}
function isInViewport(element) {
  // Get the bounding client rectangle position in the viewport
  const bounding = element.getBoundingClientRect();

  // Checking part. Here the code checks if it's *fully* visible
  // Edit this part if you just want a partial visibility
  if (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  ) {
    // console.log("In the viewport! :)");
    return true;
  } else {
    // console.log("Not in the viewport. :(");
    return false;
  }
}

const update = {
  emote: () => scramble($("#emote"), randItem(Emotes), 5),
  lorem: () => scramble($("#lorem"), randItem(LoremWords), 10),
  compliment: () => {
    fetch("https://complimentr.com/api")
      .then((response) => response.json())
      .then(({ compliment }) => scramble($("#compliment"), compliment));
  },
  quote: () => {
    fetch("https://api.quotable.io/quotes/random?minLength=50")
      .then((response) => response.json())
      .then((object) => object[0])
      .then(({ content }) => scramble($("#quote"), content, 30));
  },
};

function Init() {
  update.emote();
  update.quote();

  window.onmousemove = cursor;
  window.onscroll = scrollObserver;
}
Init();

function cursor(e) {
  const cursor = $("#cursor");
  const target = e.target;
  let newWidth = "1rem";
  if (target.classList.contains("hover")) {
    const { height } = target.getBoundingClientRect();
    // console.log(height)
    newWidth = height + "px";
  }

  if (target.classList.contains("clickable")) {
    cursor.classList.add("clickable");
  } else {
    cursor.classList.remove("clickable");
  }

  cursor.style.width = newWidth;

  let cursorWidth = 0;

  if (newWidth.includes("rem"))
    cursorWidth = parseInt(newWidth.replace("rem", "")) * 16;
  else if (newWidth.includes("px"))
    cursorWidth = parseInt(newWidth.replace("px", ""));

  // parseInt(newWidth.includes("rem")?.replace("rem","")) * 16
  // .replace("px", "")

  // let x = (e.clientX - cursorWidth / 2).toFixed(0, 0);
  // let y = (e.clientY - cursorWidth / 2).toFixed(0, 0);
  // console.log(x, y)
  cursor.style.opacity = "1";
  cursor.style.left = (e.clientX - cursorWidth / 2).toFixed(0, 0) + "px";
  cursor.style.top = (e.clientY - cursorWidth / 2).toFixed(0, 0) + "px";

  // cursor.style.width = (e.target.classList.contains("hover")) ? "3rem" : "1rem"
  // if(e.target.class)
}

var animated = false;
function scrollObserver() {
  if (
    isInViewport($("#lorem")) &&
    isInViewport($("#compliment")) &&
    !animated
  ) {
    update.lorem();
    update.compliment();
    animated = true;
  }
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
