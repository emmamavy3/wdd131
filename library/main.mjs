import library from "./BaMlibrary.mjs";

const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
});

function displayItems(items) {
  const mainContent = document.querySelector("#main-content");
  if (!mainContent) return;

  mainContent.innerHTML = items
    .map(
      (item) => `
      <article class="library-item">
        <section class="library-description">
          <h2>${item.title}</h2>
          <div>${item.Author || item.director}</div>
          <img class="book-image" src="${item.imgSrc}" alt="${item.imgAlt}" />
          <p>${item.description}</p>
        </section>
        <section class="library-info">
          <div>${item.publish_Date || item.release_Date}</div>
          <div>${item.genre}</div>
          <div>${item.type}</div>
        </section>
      `
    )
    .join("");
  }

  const path = window.location.pathname;

  if (path.includes("books.html")) {
    const books = library.filter((item) => item.medium === "Book");
    displayItems(books);
  } else if (path.includes("movies.html")) {
    const movies = library.filter((item) => item.medium === "Movie");
    displayItems(movies);
  }
  else{
    const allItems = library.filter(
      (item) => item.medium === "Book" || item.type === "Movie"
    );
    displayItems(allItems);

  }
