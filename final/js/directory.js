const request = "//abunderson.github.io/final/json/business.json";


fetch(request)
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

    });
  });
