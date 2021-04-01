const request = "//abunderson.github.io/final/json/business.json";


fetch(request)
  .then((response) => response.json())
  .then((business) => {
console.log(business);


  });
