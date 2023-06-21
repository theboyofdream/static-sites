// variables
const listOfAnimals = [
  "fox",
  "kitten",
  "toco toucan",
  "turtle",
  "golden retriever",
  "red squirrel",
  "elephant",
  "chameleons",
  "northern cardinal",
  "european robin",
  "white tailed deer",
  "flamingo",
  "raccoon",
  "arctic fox",
  "hamster",
  "lovebirds",
  "sciurus vulgaris ognevi",
  "black rhinoceros",
  "butterfly",
  "leopard",
  "tree frog",
];
const api = "/lib/api/";
const dataFetchLimitPerRequest = 5;
let shuffledListOfAnimals = [];

// helper functions
const $ = (selector) => document.querySelector(selector);
const toggleTheme = () => ($("#dark-mode").checked = !$("#dark-mode").checked);
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  shuffledListOfAnimals = array;
};

const fetchData = () => {
  // console.log(shuffledListOfAnimals.length);

  for (let index = 0; index < dataFetchLimitPerRequest; index++) {
    if (shuffledListOfAnimals.length > 0)
      console.log(api + shuffledListOfAnimals.pop() + ".json");
  }

  // console.log(shuffledListOfAnimals.length);
};
const loadHTML = async () => {};

// For Live Projects
window.addEventListener("load", function () {
  shuffleArray(listOfAnimals);

  fetchData();
  fetchData();
  fetchData();
  fetchData();
  fetchData();
});
