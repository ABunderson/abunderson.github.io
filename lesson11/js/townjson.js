const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];

    const cards = document.querySelector(".cardshome");

    

    const townfilter = towns.filter(
      (town) =>
        town.name == "Preston" ||
        town.name == "Soda Springs" ||
        town.name == "Fish Haven"
    );
    townfilter.forEach((town) => {
      let card = document.createElement("section");
      let title = document.createElement("h2");
      let motto = document.createElement("h3");
      let image = document.createElement("img");
      let year = document.createElement("p");
      let population = document.createElement("p");
      let rain = document.createElement("p");
      let data = document.createElement("div");
      let connect = document.createElement("a");

      title.innerHTML = `${town.name}`;
      motto.innerHTML = `${town.motto}`;
      year.innerHTML = `Year Founded:<br>${town.yearFounded}`;
      population.innerHTML = `Population:<br>${town.currentPopulation}`;
      rain.innerHTML = `Annual Rain Fall:<br>${town.averageRainfall}`;

      data.setAttribute("class", `data`);

      let location = `${town.photo}`;
      let loco = location.replace("jpg", "html");

      connect.setAttribute("href", loco);

      let classname = location.replace(".jpg", "");

      card.setAttribute("class", classname);

      image.setAttribute("src", `images/${town.photo}`);
      image.setAttribute("alt", `Picture of ${town.name}, Idaho`);
      image.setAttribute("loading", "lazy");

      connect.append(title);
      connect.append(motto);
      connect.append(data);
      data.append(year);
      data.append(population);
      data.append(rain);
      connect.append(image);
      card.append(connect);
      cards.append(card);
    });
  });
