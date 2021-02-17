// get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the IntersectionalObserver
const imgOptions = {
  threshold: 1,
  rootMargin: "0px 0px -50px 0px",
};

const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

// first check to see if Intersection Observer is supported
if ("IntersectionObserver" in window) {
  const imgObserver = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);

  // loop through each img and check status and load if necessary
  imagesToLoad.forEach((image) => {
    imgObserver.observe(image);
  });
} else {
  //just load All images if not supported
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}


// toLocaleDateString Current date JavaScript
const daynames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
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
    "December"
];
const todaysdate = new Date();
const dayName = daynames[todaysdate.getDay()];
const monthName = months[todaysdate.getMonth()];
const year = todaysdate.getFullYear();
const currentdate = dayName + ", " + todaysdate.getDate() + " " + monthName + " " + year;
const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};
document.getElementById("currentdate").textContent = currentdate;