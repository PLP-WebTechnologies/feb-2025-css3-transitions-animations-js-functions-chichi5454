// Animate box when button is clicked
const animateBtn = document.getElementById("animateBtn");
const box = document.getElementById("box");

animateBtn.addEventListener("click", () => {
  box.classList.toggle("animate");
});

// Store and retrieve favorite color
const saveBtn = document.getElementById("saveColor");
const colorInput = document.getElementById("colorInput");
const welcomeText = document.getElementById("welcome");

saveBtn.addEventListener("click", () => {
  const favColor = colorInput.value;
  localStorage.setItem("favoriteColor", favColor);
  applyUserPreferences();
});

function applyUserPreferences() {
  const storedColor = localStorage.getItem("favoriteColor");
  if (storedColor) {
    welcomeText.style.color = storedColor;
  }
}


window.onload = applyUserPreferences;
