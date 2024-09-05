const items = document.querySelectorAll('.preview__item');
const slider = document.querySelector('.slider');

let activeIndex = 0;

function moveSlider(index) {
  const selectedItem = items[index];
  const itemWidth = selectedItem.offsetWidth;
  const itemOffsetLeft = selectedItem.offsetLeft;

  slider.style.transform = `translateX(${itemOffsetLeft}px)`;
  slider.style.width = `${itemWidth}px`;

  activeIndex = index;
  
  window.dispatchEvent(new CustomEvent('tabChange', { detail: index }));
}

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    moveSlider(index);
    localStorage.setItem('activeTabIndex', index);
  });
});

window.addEventListener('load', () => {
  moveSlider(activeIndex);

  setTimeout(() => {
    slider.style.opacity = 1;
  }, 300);
});

window.addEventListener('resize', () => {
  moveSlider(activeIndex);
});
