// Add event listeners to the navigation menu items
document.addEventListener("DOMContentLoaded", function () {
  var navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(function (navItem) {
    navItem.addEventListener('click', function (event) {
      event.preventDefault();
      var target = event.target;
      var dropdownMenu = target.nextElementSibling;

      if (dropdownMenu) {
        dropdownMenu.classList.toggle('show');
      }
    });
  });
});

// Add event listener to the search form
document.addEventListener("DOMContentLoaded", function () {
  var searchForm = document.querySelector('.search-form');

  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var searchTerm = searchForm.querySelector('input[type="search"]').value.trim();

    if (searchTerm) {
      // Perform search action here
      console.log('Search term:', searchTerm);
    }
  });
});

// Add event listeners to the modals
document.addEventListener("DOMContentLoaded", function () {
  var loginModal = document.getElementById('loginModal');
  var wishlistModal = document.getElementById('wishlistModal');
  var cartModal = document.getElementById('cartModal');

  loginModal.addEventListener('show.bs.modal', function (event) {
    // Perform action when login modal is shown
    console.log('Login modal shown');
  });

  wishlistModal.addEventListener('show.bs.modal', function (event) {
    // Perform action when wishlist modal is shown
    console.log('Wishlist modal shown');
  });

  cartModal.addEventListener('show.bs.modal', function (event) {
    // Perform action when cart modal is shown
    console.log('Cart modal shown');
  });
});


const deliverToBtn = document.getElementById('deliver-to-btn');
const mapModal = document.getElementById('map-modal');
const closeBtn = document.querySelector('.close');

deliverToBtn.addEventListener('click', () => {
  mapModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  mapModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === mapModal) {
    mapModal.style.display = 'none';
  }
});
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.0444, lng: 31.2357},
    zoom: 12,
  });

  const marker = new google.maps.Marker({
    position: {lat: 30.0444, lng: 31.2357},
    map: map,
    title: 'Cairo',
  });
}