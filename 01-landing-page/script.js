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
