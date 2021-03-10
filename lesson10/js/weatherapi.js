const apiURL =
  "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=ed322eeeaba3fbf6a615b4175fa51fdf&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById("current-temp").textContent = weatherInfo.main.temp;
    const imagesrc =
      "https://openweathermap.org/img/w/" +
      weatherInfo.weather[0].icon +
      ".png"; // note the concatenation
    const desc = weatherInfo.weather[0].description; // note how we reference the weather array
    document.getElementById("imagesrc").textContent = imagesrc; // informational specification only
    document.getElementById("icon").setAttribute("src", imagesrc); // focus on the setAttribute() method
    document.getElementById("icon").setAttribute("alt", desc);
  });
