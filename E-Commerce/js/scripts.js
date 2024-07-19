// Add to cart functionality
$(document).on('click', '.add-to-cart', function () {
  const productName = $(this).data('product');
  const productPrice = $(this).data('price');
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push({ name: productName, price: productPrice });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  alert('Product added to cart!');
});

$(document).ready(function() {
  // Sample items for the second slider
  const items = [
      'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
      'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
      'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15',
      'Item 16', 'Item 17', 'Item 18', 'Item 19', 'Item 20'
  ];

  const itemsPerSlide = 10;
  const totalItems = items.length;
  const totalSlides = Math.ceil(totalItems / itemsPerSlide);

  for (let i = 0; i < totalSlides; i++) {
      let slide = $('<div class="carousel-item"></div>');
      if (i === 0) slide.addClass('active');
      let row = $('<div class="row"></div>');
      for (let j = 0; j < itemsPerSlide; j++) {
          let index = i * itemsPerSlide + j;
          if (index >= totalItems) break;
          let col = $('<div class="col-md-1"></div>').text(items[index]);
          row.append(col);
      }
      slide.append(row);
      $('#secondSlider .carousel-inner').append(slide);
  }

  $('#secondSlider').on('slide.bs.carousel', function (e) {
      let $e = $(e.relatedTarget);
      let idx = $e.index();
      let itemsPerSlide = 10;
      let totalItems = $('#secondSlider .carousel-item').length;

      if (idx >= totalItems-(itemsPerSlide-1)) {
          let it = itemsPerSlide - (totalItems - idx);
          for (let i=0; i<it; i++) {
              // Append slides to end
              if (e.direction=="left") {
                  $('#secondSlider .carousel-item').eq(i).appendTo('#secondSlider .carousel-inner');
              } else {
                  $('#secondSlider .carousel-item').eq(0).appendTo('#secondSlider .carousel-inner');
              }
          }
      }
  });
});


// Add an event listener to the toggle switch
document.getElementById('dark-mode-toggle').addEventListener('change', function() {
  // Toggle dark mode on and off
  document.body.classList.toggle('dark-mode');
});
