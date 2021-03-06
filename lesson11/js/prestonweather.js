const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apifURL =
  "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ed322eeeaba3fbf6a615b4175fa51fdf&units=imperial";
fetch(apifURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    let mylist = weatherInfo.list;
    let forecastDayNumber = todayDayNumber;

    for (i = 0; i < mylist.length; i++) {
      let time = mylist[i].dt_txt;
      if (time.includes("18:00:00")) {
        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0;
        }

        let theDayName = document.createElement("h4");
        theDayName.textContent = weekday[forecastDayNumber];

        let theTemp = document.createElement("span");
        theTemp.innerHTML = `${weatherInfo.list[i].main.temp}&#176;F`;

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img");
        theIcon.src = iconPath;
        theIcon.alt = `Icon image of ${weatherInfo.list[i].weather[0].description}`;

        let theDay = document.createElement("div");

        theDay.append(theDayName);
        theDay.append(theIcon);
        theDay.append(theTemp);

        document.getElementById("forecastDays").append(theDay);

        // cards.append(card);
        // card.append(theTemp);
      }
    }
  });

const apiURL =
  "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=ed322eeeaba3fbf6a615b4175fa51fdf&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    document.getElementById("speed").innerHTML = weatherInfo.wind.speed;
    document.getElementById("humid").innerHTML = weatherInfo.main.humidity;
    document.getElementById("hightemp").innerHTML = weatherInfo.main.temp_max;
    let current = `${weatherInfo.weather[0].description}, ${weatherInfo.main.temp}`;
    document.getElementById("current").innerHTML = current.replace(/^\w/, (c) =>
      c.toUpperCase()
    );

    /*s = wind speed t = temperature*/
    const s = weatherInfo.wind.speed;
    const t = weatherInfo.main.temp;
    let wc =
      35.74 +
      0.6215 * t -
      35.75 * Math.pow(s, 0.16) +
      0.4275 * t * Math.pow(s, 0.16);
    wc = Math.round(wc);
    if (t <= 50 && s > 3) {
      document.getElementById("chill").textContent = wc + "\xB0" + "F";
    } else {
      document.getElementById("chill").textContent = "N/A";
    }
  });

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];

    const event = document.querySelector(".events");

    const townfilter = towns.filter((town) => town.name == "Preston");
    townfilter.forEach((town) => {
      let title = document.createElement("h2");
      let eventadd = document.createElement("div");

      title.innerHTML = `Upcoming Events`;

      let myevents = town.events;
      for (i = 0; i < myevents.length; i++) {
        let activity = document.createElement("p");
        activity.innerHTML = `${town.events[i]}`;
        eventadd.append(activity);
      }

      event.append(title);
      event.append(eventadd);
    });
  });
