const request = "//abunderson.github.io/final/json/business.json";

fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject["businesses"];
    const cards = document.querySelector(".cards");
    //console.log(businesses);

    businesses.forEach((business) => {
      let card = document.createElement("div");
      let name = document.createElement("h2");
      let logo = document.createElement("img");
      let phone = document.createElement("p");
      let address = document.createElement("p");
      let email = document.createElement("p");
      let website = document.createElement("a");

      //Title
      name.innerHTML = `${business.name}`;

      //image
      logo.setAttribute("src", `images/${business.logo}`);
      logo.setAttribute(
        "alt",
        `Logo for 
          ${business.name}`
      );
      logo.setAttribute("loading", "lazy");

      phone.innerHTML = `Phone number: <br>${business.phone}`;
      address.innerHTML = `Address: <br>${business.address}<br>${business.city}`;
      email.innerHTML = `Email: ${business.email}`;
      website.innerHTML = `URL: ${business.website}`;
      website.setAttribute("href", `//${business.website}`);

      //add to the card
      cards.append(card);
      card.append(name);
      card.append(logo);
      card.append(phone);
      card.append(address);
      card.append(email);
      card.append(website);
    });
  });

function gridView() {
  let show = document.getElementById("changeView");
  let unbutton = document.getElementById("listBtn");
  let button = document.getElementById("gridBtn");
  show.setAttribute("class", "cards grid");
  button.setAttribute("class", "joinBtn activebutton")
  unbutton.setAttribute("class", "joinBtn")
}
function listView() {
  let show = document.getElementById("changeView");
  show.setAttribute("class", "cards list");
  let button = document.getElementById("listBtn");
  let unbutton = document.getElementById("gridBtn");
  button.setAttribute("class", "joinBtn activebutton")
  unbutton.setAttribute("class", "joinBtn")
}
