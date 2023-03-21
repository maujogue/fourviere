document.addEventListener("DOMContentLoaded", function() {
  fetch("../partials/head.html")
    .then(response => response.text())
    .then(html => {
      document.querySelector("#head").innerHTML = html;
    });
  fetch("../partials/header.html")
    .then(response => response.text())
    .then(html => {
      document.querySelector("#header").innerHTML = html;
    });
  fetch("../partials/footer.html")
    .then(response => response.text())
    .then(html => {
      document.querySelector("#footer").innerHTML = html;
    });
  
});