const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyBtn = document.querySelector(".hex-copy-color");

// hex color generator

hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * characterSet.length)
    );
  }

  hexColorValue.textContent = `#${hexColorOutput}`;
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`;
  hexBtn.style.color = `#${hexColorOutput}`;

  console.log(hexColorOutput);
});

// rgb color generator
const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbColorValue = document.querySelector(".rgb-color-value");
const rgbCopyBtn = document.querySelector(".rgb-copy-color");

rgbBtn.addEventListener("click", () => {
  let extractRedValue = getRedInputRange.value;
  let extractGreenValue = getGreenInputRange.value;
  let extractBlueValue = getBlueInputRange.value;

  rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbBtn.style.color = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
  rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`;
});

// copy to clipboard functionality

hexCopyBtn.addEventListener("click", copyHexColorToClipboard);

rgbCopyBtn.addEventListener("click", copyRgbColorToClipboard);

function copyHexColorToClipboard() {
  navigator.clipboard.writeText(hexColorValue.textContent);
  alert("copied");
}
function copyRgbColorToClipboard() {
  navigator.clipboard.writeText(rgbColorValue.textContent);
  alert("copied");
}
