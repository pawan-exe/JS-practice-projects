const postsListContainer = document.querySelector(".posts-list-container");

// fetch using XHR

function fetchUsingXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      displayResults(xhr.response);
    } else {
      console.log("Some error occured");
    }
  };
}

// fetch using fetch method

function fetchUsingFetchMethod() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  fetchRequest
    .then((response) => response.json())
    .then((result) => displayResults(result))
    .catch((e) => console.log(e));
}

// fetch using async await method

async function fetchUsingAsyncAwaitMethod() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  const data = await response.json();
  displayResults(data);
}

// display posts
function displayResults(posts) {
  postsListContainer.innerHTML = posts
    .map(
      (postItem) =>
        `<div class="post-item">
    <h3>${postItem.title}</h3>
    <p>${postItem.body}</p>
    </div>`
    )
    .join(" ");
}

// fetchUsingXHR();
// fetchUsingFetchMethod();
fetchUsingAsyncAwaitMethod();
