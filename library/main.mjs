import library from "./BaMlibrary.mjs";

const logo = document.getElementById("site-logo");
const hero = document.getElementById("hero-image-home");
const heroGeneral = document.getElementById("hero-image");

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const updateLogo = () => {
  const isDark = document.body.classList.contains("dark-mode");
  logo.src = isDark
    ? "style/images/logodark.avif"
    : "style/images/logobright.avif";
};

const updateHero = () => {
  const isDark = document.body.classList.contains("dark-mode");

  if (hero) {
    hero.src = isDark
      ? "style/images/nightsky.avif"
      : "style/images/adventure.avif";
  } else if (heroGeneral) {
    const path = window.location.pathname;
    if (path.includes("books.html")) {
      heroGeneral.src = isDark
        ? "style/images/Books-On-Bookshelf.avif"
        : "style/images/Books-On-Bookshelf.avif";
    } else if (path.includes("movies.html")) {
      heroGeneral.src = isDark
        ? "style/images/movieseat.avif"
        : "style/images/movieseat.avif";
    }
  }
};

if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") && prefersDark.matches)
) {
  document.body.classList.add("dark-mode");
}

updateLogo();
updateHero();

logo.addEventListener("click", (event) => {
  event.preventDefault();

  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  updateLogo();
  updateHero();
});

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.querySelector("form");
  const searchField = document.getElementById("search-field");

  if (searchForm && searchField) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent form from reloading the page
      const query = searchField.value.trim().toLowerCase();

      const filteredItems = library.filter((item) => {
        return (
          item.title.toLowerCase().includes(query) ||
          (item.Author && item.Author.toLowerCase().includes(query)) ||
          (item.director && item.director.toLowerCase().includes(query))
        );
      });

      displayItems(filteredItems);
    });
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
          <h3>${item.Author || item.director}</h3>
          <img class="book-image" src="${item.imgSrc}" alt="${item.imgAlt}" />
          <p class="description">${item.description}</p>
        </section>
        <section class="library-info">
          <div>${item.publish_Date || item.release_Date}</div>
          <div>${item.genre}</div>
          <div>${item.Stars}</div>
        </section>
      </article>
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
} else {
  const allItems = library.filter(
    (item) => item.medium === "Book" || item.medium === "Movie"
  );
  displayItems(allItems);
}

document.addEventListener("DOMContentLoaded", () => {
  const suggestionForm = document.getElementById("suggestionForm");

  if (suggestionForm) {
    suggestionForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const suggestion = document.getElementById("suggestion").value.trim();

      const newEntry = {
        name,
        email,
        suggestion,
        timestamp: new Date().toISOString(),
      };

      // Retrieve existing suggestions or initialize an empty array
      const suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];

      // Add the new entry
      suggestions.push(newEntry);

      // Save it back to localStorage
      localStorage.setItem("suggestions", JSON.stringify(suggestions));

      alert("Thank you for your suggestion!");

      // Reset the form
      suggestionForm.reset();
    });
  }
});
