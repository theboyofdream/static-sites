function scramble(selector, text, times = randInt(15)) {
  const HTMLElement = $(selector);
  setTimeout(() => (HTMLElement.innerText = text), (times + 1) * 100);

  for (times; times > 0; times--) {
    setTimeout(() => {
      let newText = "";
      for (let i = 0; i < text.length; i++)
        newText += text.charAt(i) === " " ? " " : randChar();
      HTMLElement.innerText = newText;
    }, times * 100);
  }
}

function isInViewport(selector) {
  const element = $(selector);
  // Get the bounding client rectangle position in the viewport
  const { top, left, right, bottom } = element.getBoundingClientRect();

  // Checking part. Here the code checks if it's *fully* visible
  // Edit this part if you just want a partial visibility
  if (
    top >= 0 &&
    left >= 0 &&
    right <= (window.innerWidth || document.documentElement.clientWidth) &&
    bottom <= (window.innerHeight || document.documentElement.clientHeight)
  ) {
    // console.log("In the viewport! :)");
    return true;
  } else {
    // console.log("Not in the viewport. :(");
    return false;
  }
}

async function Fetch(apiEndpoint) {
  if (navigator.onLine) {
    try {
      const response = await fetch(apiEndpoint);
      const result = await response.json();
      localStorage.setItem(apiEndpoint, JSON.stringify(result));
      // console.log(localStorage);
      return result;
    } catch (error) {
      // console.error(error);
    }
  }
  return JSON.parse(localStorage.getItem(apiEndpoint));
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
