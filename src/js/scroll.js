import $ from 'jquery';
const refs = {
  menu: document.querySelector('[data-menu]'),
  body: document.querySelector('body'),
};
$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
      if (
        refs.menu.classList[1] === 'mob-is-hidden' ||
        refs.menu.classList[0] === 'mob-is-hidden'
      ) {
        return;
      }
      refs.menu.classList.toggle('mob-is-hidden');
      refs.body.classList.toggle('no-scroll');
      console.log(refs.menu.classList[1]);
    }
  });
});