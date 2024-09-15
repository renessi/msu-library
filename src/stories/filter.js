import IconUp from '@/06_shared/img/svg/chevron-up.svg';
import IconDown from '@/06_shared/img/svg/chevron-down.svg';
import IconSearch from '@/06_shared/img/svg/search.svg';

export const createFilter = ({label}) => {

    const filter = document.createElement("div");

    filter.innerHTML = `
       <div style="background: rgba(0, 0, 0, 0.7)">
       <div class="filter">
       <div class="filter__top">
         <span class="filter__text">${label}</span>
         <svg class="filter__img">
           <use xlink:href="#icon-chevron-up"></use>
         </svg>
       </div>
       <div class="filter__top">
         <label class="filter__text">
           <svg class="filter__img filter__img--search">
             <use xlink:href="#icon-search"></use>
           </svg>
           <input class="filter__input" type="text">
         </label>
         <svg class="filter__img">
           <use xlink:href="#icon-chevron-down"></use>
         </svg>
       </div>
     </div>
     
        </div> `;

        return filter

}