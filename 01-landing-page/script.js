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

const Chars =
  `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=[]\;',./~!@#$%^&*()_+{}|:"<>?`.split(
    ""
  );

function scramble(selector, text, times = randInt(15)) {
  const HTMLElement = $(selector);
  setTimeout(() => (HTMLElement.innerText = text), (times + 1) * 100);

  for (times; times > 0; times--) {
    setTimeout(() => {
      let newText = "";
      for (let i = 0; i < text.length; i++)
        newText += text.charAt(i) === " " ? " " : randItem(Chars);
      HTMLElement.innerText = newText;
    }, times * 100);
  }
}

function isInViewport(selector) {
  const element = $(selector);
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

async function Fetch(apiEndpoint) {
  const response = await fetch(apiEndpoint);
  return await response.json();
}

const refresh = {
  emote: () => scramble("#emote", randItem(Emotes), 5),
  lorem: () => scramble("#lorem", randItem(LoremWords), 10),
  compliment: async () => {
    const { compliment } = await Fetch("https://complimentr.com/api");
    scramble("#compliment", compliment);
  },
  quote: async () => {
    const arr = await Fetch(
      "https://api.quotable.io/quotes/random?minLength=50"
    );
    scramble("#quote", arr[0]?.content, 30);
  },
};

function Init() {
  refresh.emote();
  refresh.quote();

  window.onmousemove = cursor;

  let observered = false;
  window.onscroll = function () {
    if (isInViewport("#lorem") && isInViewport("#compliment") && !observered) {
      refresh.lorem();
      refresh.compliment();
      observered = true;
    }
  };
}
Init();

function cursor(e) {
  const cursor = $("#cursor");

  let newWidth = "1rem";
  if (e.target.classList.contains("hover"))
    newWidth = e.target.getBoundingClientRect().height + "px";

  if (e.target.classList.contains("clickable"))
    cursor.classList.add("clickable");
  else cursor.classList.remove("clickable");

  let cursorRadius = round(cursor.getBoundingClientRect().height / 2);

  cursor.style.width = newWidth;
  cursor.style.left = e.clientX - cursorRadius + "px";
  cursor.style.top = e.clientY - cursorRadius + "px";
}
