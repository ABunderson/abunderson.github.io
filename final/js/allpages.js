//Menu
function toggleMenu() {
  document.getElementById("primaryNavId").classList.toggle("hide");
}

//Last Modified
const daynames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const mod = new Date(document.lastModified);
const dayName = daynames[mod.getDay()];
const monthName = months[mod.getMonth()];
const year = mod.getFullYear();
const minute = mod.getMinutes();
let time = mod.getHours();
let morn_eve = "am";
if ((time = 12)) {
  morn_eve = "pm";
} else if (time > 12) {
  time = time - 12;
  morn_eve = "pm";
}
const lastmodified =
  dayName +
  ", " +
  mod.getDate() +
  " " +
  monthName +
  " " +
  year +
  " at " +
  time +
  ":" +
  minute +
  morn_eve;
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
};
document.getElementById("modified").textContent =
  "Last Modified: " + lastmodified;
