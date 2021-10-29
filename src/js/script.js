const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const progressbar = document.querySelectorAll('.progressbar__skills-percent'),
      items = document.querySelectorAll('.progressbar__skills-item div'); // внутри класса progressbar__skills-item есть div

progressbar.forEach( (item, i) => {
    items[i].style.width = item.innerHTML;
});