const request = "//abunderson.github.io/final/json/business.json";

fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const businesses = jsonObject["businesses"];
    const cards = document.querySelector(".cards");
    console.log(businesses);

    businesses.forEach((business) => {
      let card = document.createElement("div");
      let name = document.createElement("h2");
      let logo = document.createElement("img");
      let phone = document.createElement("p");
      let address = document.createElement("p");
      let email = document.createElement("p");
      let website = document.createElement("p");
      let city = document.createElement("p");

      //Title
      name.innerHTML = `${business.name}`;

      //image
      logo.setAttribute("src", `${business.logo}`);
      logo.setAttribute(
        "alt",
        `Logo for 
          ${business.name}`
      );
      logo.setAttribute("loading", "lazy");

      phone.innerHTML = `Phone number: ${business.phone}`;
      address.innerHTML = `Address: ${business.address}`;
      email.innerHTML = `Email: ${business.email}`;
      website.innerHTML = `URL: ${business.website}`;
      city.innerHTMl = `${business.city}`;

      //add to the card
      cards.append(card);
      card.append(name);
      card.append(logo);
      card.append(phone);
      card.append(address);
      card.append(city);
      card.append(email);
      card.append(website);
    });
  });
