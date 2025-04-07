const library = [
  {
    id: 1,
    medium: "Book",
    title: "Harry Potter and the Goblet of Fire",
    Author: "J. K. Rowling",
    description:
      "Harry, now in his fourth year at Hogwarts, unexpectedly becomes a competitor in the Triwizard Tournament, a dangerous magical competition, and faces formidable challenges as dark forces stir and strive to bring about Voldemort's return.",
    imgSrc: "style/images/Gobletof Fire.jpg",
    imgAlt: "Cover page of Harry Potter and the Goblet of Fire",
    genre: "Fantasy",
    publish_Date: "July, 2000 ",
  },
  {
    id: 3,
    medium: "Book",
    title: "The Queen's Poisoner",
    Author: "Jeff Wheeler",
    imgSrc: "style/images/QueensPoisoner.jpg",
    imgAlt: "cover page for The Queen's Posioner",
    description:
      "A young boy by the name of Owen Kiskaddon is sent to Kingfountain as a hostage after his father, the Duke of Westmarch, betrays the king in battle. To survive in this strange, new court, full of loyalty and deception, he has to prove to the king that he is worth more alive than dead.",
    genre: "Fantasy",
    publish_Date: "April, 2016",
  },
  {
    id: 5,
    medium: "Book",
    title: "Clockwork Angel",
    Author: "Cassandra Clare",
    imgSrc: "style/images/ClockworkAngel.jpg",
    imgAlt: "Cover for Clockwork Angel",
    description:
      "When Tessa Gray crosses the ocean to find her brother, her destination is England, the time is the reign of Queen Victoria, and something terrifying is waiting for her in London's Downworld, where vampires, warlocks, and other supernatural folk stalk the gaslit streets. Only the Shadowhunters, warriors dedicated to ridding the world of demons, keep order amidst the chaos.",
    genre: "Fantasy",
    publish_Date: "August, 2010",
  },
  

  {
    id: 2,
    medium: "Movie",
    title: "Mission Impossible: Rouge Nation",
    director: "Christopher McQuarrie",
    imgSrc: "style/images/mission-impossible-rogue-nation.jpg",
    imgAlt: "Mission Impossible poster",
    description:
      "With the IMF now disbanded and Ethan Hunt (Tom Cruise) out in the cold, a new threat -- called the Syndicate -- soon emerges. The Syndicate is a network of highly skilled operatives who are dedicated to establishing a new world order via an escalating series of terrorist attacks. Faced with what may be the most impossible mission yet, Ethan gathers his team and joins forces with Ilsa Faust (Rebecca Ferguson), a disavowed British agent who may or may not be a member of this deadly rogue nation",
    genre: "Fantasy",
    release_Date: "July, 2015",
    Stars:
      "Tom Cruise, Rebecca Ferguson, Simon Pegg, Jermy Renner, Ving Rhames",
  },
  {
    id: 4,
    medium: "Movie",
    title: " Knight's Tale",
    director: "Brian Helgeland",
    imgSrc: "style/images/AKnightsTale.jpg",
    imgAlt: "Kight;s Tale poster",
    description:
      "Peasant-born William Thatcher (Heath Ledger) begins a quest to change his stars, win the heart of an exceedingly fair maiden (Shanynn Sossamon) and rock his medieval world. With the help of friends (Mark Addy, Paul Bettany, Alan Tudyk), he faces the ultimate test of medieval gallantry -- tournament jousting -- and tries to discover if he has the mettle to become a legend.",
    genre: "Fantasy",
    release_Date: "May, 2001",
    Stars:
      "Heath Ledger, Shannyn Sossamon, Paul Bettany, Rufus Sewell, Maek Addy, Alan Tudyk",
  },
  {
    id: 6,
    medium: "Movie",
    title: "The Little Prince",
    director: "Mark Osborne",
    imgSrc: "style/images/TheLittlePrince.jpg",
    imgAlt: "The Little Prince poster",
    description:
      "The Aviator introduces a girl to a world where she rediscovers her childhood and learns that it's human connections that matter most, and that it is only with heart that one can see rightly; what is essential is invisible to the eye.",
    genre: "Fantasy",
    release_Date: "August, 2001",
    Stars:
      "Jeff Bridges, Rachel McAdams, James Franco, Mackenzie Foy, Paul Rudd",
  },
]
export default library;

export function displayItems(items) {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
  
    items.forEach((item) => {
      const card = document.createElementByID("cards");
      card.innerHTML = "";
  
      card.innerHTML = `
        <h2>${item.title}</h2>
        <h2>${item.Author || item.director}</h2>
        <img src="${item.imgSrc}" alt="${item.imgAlt}" />
        <p>${item.description}</p>
        <p>${item.genre}</p>
        <p>${item.publish_Date || item.release_Date}</p>
        <p>${item.Stars}</p>
        `;
  
      cards.appendChild(card);
    });
  }
