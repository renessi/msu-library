import IconUp from '@/06_shared/img/svg/chevron-up.svg';
import IconDown from '@/06_shared/img/svg/chevron-down.svg';
import IconSearch from '@/06_shared/img/svg/search.svg';

export const createSidebar = () => {

    const sidebar = document.createElement("div");

    sidebar.innerHTML = `
        <div class="sidebar" id="sidebar">
            <div class="filter" data-filter="item">
         <div class="filter__top">
            <span class="filter__text" data-filter="openSearch">Предмет</span>
            <svg class="filter__icon">
            <use xlink:href="#icon-search"></use>
            </svg>
            <input class="filter__input" type="text" data-filter="searchInput">
            <svg class="filter__img" data-filter="toggleList">
            <use xlink:href="#icon-chevron-up"></use>
            </svg>
         </div>
         <div class="filter__list">
          <ul class="filter__menu" data-filter="toggleList">
            <li class="filter__item">{{> checkbox}} <span>Анализ данных</span></li>
            <li class="filter__item">{{> checkbox}} <span>УМФ</span></li>
            <li class="filter__item">{{> checkbox}} <span>Проектирование</span></li>
            <li class="filter__item">{{> checkbox}} <span>Ангем</span></li>
          </ul>
         </div>
        </div>
        <div class="filter" data-filter="item">
          <div class="filter__top">
            <span class="filter__text" data-filter="openSearch">Семестр</span>
            <svg class="filter__icon" data-filter="openSearch">
                <use xlink:href="#icon-search"></use>
            </svg>
            <input class="filter__input" type="text" id="searchInput">
            <svg class="filter__img" data-filter="toggleList">
            <use xlink:href="#icon-chevron-up"></use>
            </svg>
           </div>
          <div class="filter__list">
            <ul class="filter__menu" data-filter="toggleList">
                <li class="filter__item">{{> checkbox}} <span>1 семестр</span></li>
                <li class="filter__item">{{> checkbox}} <span>2 семестр</span></li>
                <li class="filter__item">{{> checkbox}} <span>3 семестр</span></li>
                <li class="filter__item">{{> checkbox}} <span>4 семестр</span></li>
                <li class="filter__item">{{> checkbox}} <span>5 семестр</span></li>
                <li class="filter__item">{{> checkbox}} <span>6 семестр</span></li>
                <li class="filter__item">{{> checkbox}} <span>7 семестр</span></li>
                <li class="filter__item">{{> checkbox}} <span>8 семестр</span></li>
                <li class="filter__item">{{> checkbox}} <span>9 семестр</span></li>
                <li class="filter__item">{{> checkbox}} <span>10 семестр</span></li>
            </ul>
          </div>
        </div>
        <div class="filter" data-filter="item">
         <div class="filter__top">
            <span class="filter__text" data-filter="openSearch">Преподаватель</span>
            <svg class="filter__icon">
                <use xlink:href="#icon-search"></use>
            </svg>
            <input class="filter__input" type="text" data-filter="searchInput">
            <svg class="filter__img" data-filter="toggleList">
                <use xlink:href="#icon-chevron-up"></use>
            </svg>
            </div>
            <div class="filter__list">
              <ul class="filter__menu" data-filter="toggleList">
                <li class="filter__item">{{> checkbox}}<span>Половинко А. С</span>.</li>
                <li class="filter__item">{{> checkbox}}<span>Абдурахман И. И.</span></li>
                <li class="filter__item">{{> checkbox}}<span>Андреев И. И</span></li>
                <li class="filter__item">{{> checkbox}}<span>Синица А. Д.</span></li>
              </ul>
            </div>
        </div>
        <div class="filter" data-filter="item">
          <div class="filter__top">
            <span class="filter__text" data-filter="openSearch">Библиотека</span>
            <svg class="filter__icon">
                <use xlink:href="#icon-search"></use>
            </svg>
            <input class="filter__input" type="text" id="searchInput">
            <svg class="filter__img" data-filter="toggleList">
                <use xlink:href="#icon-chevron-up"></use>
            </svg>
            </div>
            <div class="filter__list">
             <ul class="filter__menu" data-filter="toggleList">
                <li class="filter__item">{{> checkbox}} <span>Лекция</span></li>
                <li class="filter__item">{{> checkbox}} <span>Книга</span></li>
                <li class="filter__item">{{> checkbox}} <span>Лабораторная</span></li>
                <li class="filter__item">{{> checkbox}} <span>Курсовая</span></li>
                <li class="filter__item">{{> checkbox}} <span>Другое</span></li>
             </ul>
            </div>
          </div>
       </div>`;

        return sidebar;

}