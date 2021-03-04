const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject["prophets"];
    const cards = document.querySelector(".cards");

    prophets.forEach((prophet) => {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let image = document.createElement("img");
      let birthDate = document.createElement("p");
      let birthPlace = document.createElement("p");
      let deathDate = document.createElement("p");
      let timeProphet = document.createElement("p");

      //Title
      h2.innerHTML = `${prophet.name}  ${prophet.lastname}`;

      //image
      image.setAttribute("src", `${prophet.imageurl}`);
      image.setAttribute(
        "alt",
        `Picture of the prophet 
          ${prophet.name} 
          ${prophet.lastname}`
      );
      image.setAttribute("loading", "lazy");

      //birth place
      birthPlace.innerHTML = `Place of birth: ${prophet.birthplace}`;

      //birth date
      birthDate.innerHTML = `Date of birth: ${prophet.birthdate}`;

      //death date
      deathDate.innerHTML = `Date of death: ${prophet.death}`;

      //time they were a prophet
      timeProphet.innerHTML = `Years spent as a prophet: ${prophet.length}`;

      //add to the card
      cards.append(card);
      card.append(h2);
      card.appendChild(image);
      card.appendChild(birthPlace);
      card.appendChild(birthDate);
      card.appendChild(deathDate);
      card.appendChild(timeProphet);
    });
  });
