const $ = (selector) => document.querySelector(selector);

// For Live Projects
window.addEventListener("load", function () {
  // this.alert("loaded");
});

function toggleTheme() {
  $("#dark-mode").checked = !$("#dark-mode").checked;
}
