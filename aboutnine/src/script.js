document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
  });

  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });