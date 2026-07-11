const container = document.querySelector('.video-tag__container');

const leftArrow = document.querySelector('.video-tag__arrow--left');

const rightArrow = document.querySelector('.video-tag__arrow--right');

window.addEventListener("resize", updateArrow);

container.addEventListener("scroll", updateArrow);

leftArrow.addEventListener('click', () => {
  container.scrollBy({
    left: -300,
    behavior: 'smooth',
  });
});

rightArrow.addEventListener('click', () => {
  container.scrollBy({
    left: 300,
    behavior: 'smooth',
  });
});

function updateArrow () {
  if (container.scrollLeft <= 0) {
  leftArrow.style.display = 'none';
  } else {
  leftArrow.style.display = 'flex';
  }

  if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
    rightArrow.style.display = 'none';
  } else {
    rightArrow.style.display = 'flex';
  }
};

updateArrow();

