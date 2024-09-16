import IconUp from '@/06_shared/img/svg/chevron-up.svg';
import IconDown from '@/06_shared/img/svg/chevron-down.svg';
import IconSearch from '@/06_shared/img/svg/search.svg';

export const createFilter = ({label}) => {

    const filter = document.createElement("div");

    filter.innerHTML = `
        <div class="filter">
          <div class="filter__subject">
            <span class="filter__text">Предмет</span>
            <svg class="filter__img">
              <use xlink:href="#icon-chevron-up"></use>
            </svg>
          </div>
          <div class="filter__search">
            <svg class="filter__search-img">
              <use xlink:href="#icon-search"></use>
            </svg>
            <form action="" class="filter__form">
              <input class="filter__input" type="text">
            </form>
            <svg class="filter__img">
              <use xlink:href="#icon-chevron-down"></use>
            </svg>
          </div>`;

        return filter

}