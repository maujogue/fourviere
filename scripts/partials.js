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
    fetch("../partials/header_payment.html")
      .then(response => response.text())
      .then(html => {
        document.querySelector("#header_payment").innerHTML = html;
      });
  fetch("../partials/footer.html")
    .then(response => response.text())
    .then(html => {
      document.querySelector("#footer").innerHTML = html;
    });
});

function filterItems() {
  // Get all items
  const all = document.querySelectorAll('.artist_item');
  const musique = document.querySelectorAll('.musique');
  const theatre = document.querySelectorAll('.theatre');
  
  // Get selected categories
  const categories = Array.from(document.querySelectorAll('input[type=radio]:checked')).map(el => el.value);

  // Loop through items
  musique.forEach(musique => {
    // If the item has a class that matches a selected category, show it. Otherwise, hide it.
    if (categories.length === 0 || categories.some(cat => musique.classList.contains(cat))) {
      musique.style.display = '';
    } else {
      musique.style.display = 'none';
    }
  });
    theatre.forEach(theatre => {
    // If the item has a class that matches a selected category, show it. Otherwise, hide it.
    if (categories.length === 0 || categories.some(cat => theatre.classList.contains(cat))) {
      theatre.style.display = '';
    } else {
      theatre.style.display = 'none';
    }
  });
  all.forEach(all => {
    // If the item has a class that matches a selected category, show it. Otherwise, hide it.
    if (categories.length === 0 || categories.some(cat => all.classList.contains(cat))) {
      all.style.display = '';
    } else {
      all.style.display = 'none';
    }
  });
}

// Add event listener to filter checkboxes
document.querySelectorAll('input[type=radio]').forEach(el => {
  el.addEventListener('change', filterItems);
});