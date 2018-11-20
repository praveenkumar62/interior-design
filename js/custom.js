    $(document).ready(function () {
    if (screen.width > 1024) {
    AOS.init({
    easing: 'ease-in-out-sine',
    once: true,
    });
    }
    });

$(document).ready(function() {
  $('#quote-carousel').carousel({
    pause: true, interval: 5000,
  });
});