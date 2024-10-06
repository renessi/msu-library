const filterContainer = document.querySelector('.filter__container');
const filters = filterContainer.querySelectorAll('.filter__top');

filters.forEach(filter => {
    const down = filter.querySelector('.filter__img');
    const menu = filter.querySelector('.filter__menu');
    
    filter.addEventListener('click', () => {
        down.classList.toggle('filter__img--rotate');
        menu.classList.toggle('filter__menu--open');
    });
});
console.log(filters);

