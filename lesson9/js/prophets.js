const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement("section");
      let h2 = document.createElement("h2");
      let image = document.createElement("img");
      let birthDate = document.createElement("p");
      let birthPlace = document.createElement("p");
      let deathDate = document.createElement("p");
      let timeProphet = document.createElement("p");
      

//Title
      h2.textContent = prophets[i].name + " " + prophets[i].lastname;

        //image 
      image.setAttribute("src", prophets[i].imageurl);

      //birth place
      birthPlace.textContent = "Place of birth: " + prophets[i].birthplace;

      //birth date
      birthDate.textContent = "Date of birth: " + prophets[i].birthdate;

      //death date
      deathDate.textContent = "Date of death: " + prophets[i].death;

      //time they were a prophet
      timeProphet.textContent = "Years spent as a prophet: " + prophets[i].length;


      document.querySelector("div.cards").appendChild(card);

      //add to the card
      card.appendChild(h2);
      card.appendChild(image);
      card.appendChild(birthPlace);
      card.appendChild(birthDate);
      card.appendChild(deathDate);
      card.appendChild(timeProphet);
    }
  });
