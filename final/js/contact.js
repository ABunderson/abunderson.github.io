//document.getElementById("emailButton").addEventListener("submit", showEmailMessage);


function showEmailMessage() {
    let show = document.getElementById("form");
    show.setAttribute("class", "form");
    let showMessage = document.getElementById("emailMessage");
    showMessage.setAttribute("class", "");
  }