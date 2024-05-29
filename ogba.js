document.addEventListener('DOMContentLoaded', function () {
  var myCarousel = new bootstrap.Carousel(
    document.getElementById('carouselSlidetCaptions'),
    {
      interval: 5000, // in milliseconds
      wrap: true, // to allow continuous sliding
    }
  );

  // Activate the carousel controls
  var carouselPrev = document.querySelector('.carousel-control-prev');
  var carouselNext = document.querySelector('.carousel-control-next');

  carouselPrev.addEventListener('click', function () {
    myCarousel.prev();
  });

  carouselNext.addEventListener('click', function () {
    myCarousel.next();
  });
});
