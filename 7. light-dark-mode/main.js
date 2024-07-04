const changeThemeBtn = document.querySelector(".change-theme-btn");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

changeThemeBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.add("light");
    body.classList.remove("dark");
  }

  if (h1.classList.contains("light")) {
    h1.classList.remove("light");
    h1.classList.add("dark");
  } else {
    h1.classList.add("light");
    h1.classList.remove("dark");
  }
});

changeThemeBtn.addEventListener("click", () => {
  body.setAttribute("data-theme", "dark");
});
