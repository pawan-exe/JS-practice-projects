const usersList = document.querySelector(".users-list");
const loader = document.querySelector(".loader");
const scrollToTop = document.querySelector(".scroll-to-top");
const scrollToBottom = document.querySelector(".scroll-to-bottom");

function showLoader() {
  loader.classList.add("show-loader");
}
function removeLoader() {
  loader.classList.remove("show-loader");
}

async function fetchUsersList() {
  showLoader();
  const res = await fetch("https://dummyjson.com/users?limit=100");
  const result = await res.json();
  if (result && result.users) displayUsersList(result.users);

  removeLoader();
}

function displayUsersList(getUsers) {
  usersList.innerHTML = getUsers
    .map(
      (user) => `
        <li>
        <p>${user.firstName} ${user.lastName}</p>
        </li>
        `
    )
    .join(" ");
}

fetchUsersList();

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollToBottom.addEventListener("click", () => {
  console.log(document.body.scrollHeight);

  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});
