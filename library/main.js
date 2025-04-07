
// Check if dark mode preference is stored in localStorage
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Load dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Save user preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
});


// import { library } from "./library.mjs";
// const mainContent = document.querySelector("#main-content");
// function displayLibrary(library) {
//   return `<article class="library">
//           <section class="book-info">
//             <div>${library.publish_Date}</div>
//             <div>${library.Author}</div>
//             <div>${library.genre}</div>
//             <div>${library.type}</div>
//           </section>
//           <section class="library-description">
//             <h2>${library.title}</h2>
//             <img
//               class="book-image"
//               src="${library.imgSrc}"
//               alt="${library.imgAlt}"
//             />
//             <p>
//             ${library.description}
//             </p>
//           </section>
//         </article>`;
// }

// // const mainContent = document.querySelector("#main-content");

// // function displayLibrary(library) {
// //     return `<article class="library">
// //           <section class="book-info">
// //             <div>${library.publish_Date}</div>
// //             <div>${library.Author}</div>
// //             <div>${library.genre}</div>
// //             <div>${library.type}</div>
// //           </section>
// //           <section class="library-description">
// //             <h2>${library.title}</h2>
// //             <img
// //               class="book-image"
// //               src="${library.imgSrc}"
// //               alt="${library.imgAlt}"
// //             />
// //             <p>
// //             ${library.description}
// //             </p>
// //           </section>
// //         </article>`;
// //   }
  
// //   mainContent.innerHTML = articles.map(displayLibrary).join("");