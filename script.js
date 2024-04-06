//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const message = document.createElement("p");
  message.textContent = "DOM load success";
  body.appendChild(message);
});



