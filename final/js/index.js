const apiURL =
  "//api.openweathermap.org/data/2.5/onecall?lat=40.4276&lon=-111.8058&appid=ed322eeeaba3fbf6a615b4175fa51fdf&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    //current weather
    let current = document.createElement("div");
    let title = document.createElement("h2");
    let currenttemp = document.createElement("p");
    let description = document.createElement("p");
    let humidity = document.createElement("p");
    let iconcode = weatherInfo.current.weather[0].icon;
    let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
    let theIcon = document.createElement("img");
    theIcon.src = iconPath;
    theIcon.alt = `Icon image of ${weatherInfo.current.weather[0].description}`;

    title.innerHTML = `Current Weather Conditions`;
    currenttemp.innerHTML = `Currently: ${weatherInfo.current.temp}\u00B0F`;
    description.innerHTML = `Condition: ${weatherInfo.current.weather[0].description}`;
    humidity.innerHTML = `Humidity: ${weatherInfo.current.humidity}%`;
    current.setAttribute("class", "currentweather");

    current.append(title);
    current.append(currenttemp);
    current.append(humidity);
    current.append(theIcon);
    current.append(description);

    document.getElementById("weather").append(current);

    //forecast
    let forecast = document.createElement("div");
    let ftitle = document.createElement("h2");
    let days = document.createElement("section");
    forecast.append(ftitle);
    forecast.append(days);
    
    ftitle.innerHTML = `3-Day Forecast`;
    
    days.setAttribute("class", "forecastdays");

    for (i = 1; i < 4; i++) {
      let day = document.createElement("div");
      let hightemp = document.createElement("p");
      let lowtemp = document.createElement("p");
      let daytitle = document.createElement("h3");
      let condition = document.createElement("p");

      let thefIcon = document.createElement("img");
      let ficoncode = weatherInfo.daily[i].weather[0].icon;
      let ficonPath = "//openweathermap.org/img/w/" + ficoncode + ".png";
      thefIcon.src = ficonPath;
      thefIcon.alt = `Icon image of ${weatherInfo.daily[i].weather[0].description}`;

      hightemp.innerHTML = `High: ${weatherInfo.daily[i].temp.max}\u00B0F`;
      lowtemp.innerHTML = `Low: ${weatherInfo.daily[i].temp.min}\u00B0F`;
      condition.innerHTML = `Condition: ${weatherInfo.daily[i].weather[0].description}`;

      const unixtime = weatherInfo.daily[i].dt;
      const milliseconds = unixtime * 1000;
      const date = new Date(milliseconds);
      dayfind = date;

      const daynames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayName = daynames[dayfind.getDay()];
      daytitle.innerHTML = `${dayName}`;

      day.append(daytitle);
      day.append(hightemp);
      day.append(lowtemp);
      day.append(thefIcon);
      day.append(condition);

      days.append(day);
    }

    forecast.setAttribute("class", "forecast");

    document.getElementById("weather").append(forecast);
  });

function hideAlert() {
  let hide = document.getElementById("alert");
  hide.setAttribute("class", "hidealert");
}

//alert

//real info
if (weatherInfo.alerts.event != "undefined") {
  let alert = document.createElement("div");
  let atitle = document.createElement("h2");
  let subtitle = document.createElement("h3");
  let adescription = document.createElement("p");
  let aicon = document.createElement("button");

  atitle.innerHTML = `Current Weather Alert`;

  //real info
  subtitle.innerHTML = `${weatherInfo.alerts.event}`;
  adescription.innerHTML = `${weatherInfo.alerts.description}`;

  //test crap
  //subtitle.innerHTML = `Event type`;
  //adescription.innerHTML = `long event description fdskjladfsf fdfkfdfs fkjdfskjdf fddfsfkjfd dfkjdfkdf fdjkdfkdf fdkjdfkjdf dfskjdfskjdf dfskjdfkjdf dfskjfdskjdfs dfskdfskjdf fdkjfkjfs fksjdfksjdkfjskdfj`;

  aicon.innerHTML = `\u274C`;
  aicon.setAttribute("id", "alertbutton");
  alert.setAttribute("id", "alert");
  alert.setAttribute("class", "alert");

  alert.append(aicon);
  alert.append(atitle);
  alert.append(subtitle);
  alert.append(adescription);

  document.getElementById("alertplace").append(alert);
  document.getElementById("alertbutton").addEventListener("click", hideAlert);

  //real info
}
