const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const BASE_URL = "https://api.github.com/users/";
const githubProfileDetails = document.querySelector(".github-profile-details");
const loader = document.querySelector(".loading-txt");

function showLoader() {
  loader.classList.add("show");
}

function removeLoader() {
  loader.classList.remove("show");
}

async function fetchGithubProfileDetails() {
  showLoader();
  const res = await fetch(`${BASE_URL}${searchInput.value}`);
  const data = await res.json();
  console.log(data);
  removeLoader();
  if (data) {
    displayProfileDetails(data);
  }
}

function displayProfileDetails(getProfileDetails) {
  const { login, avatar_url, public_repos, followers, following } =
    getProfileDetails;

  githubProfileDetails.innerHTML = `
    <p class="username">${login}</p>
  <img src=${avatar_url} alt=${login}>
  <p class="repos">Repos :${public_repos}</p>
  <p class="followers">Followers :${followers}</p>
  <p class="following">Following :${following}</p>
    `;
}

searchBtn.addEventListener("click", fetchGithubProfileDetails);
