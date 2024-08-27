import '../04_features/search/ui/search.scss';
import iconUser from "../06_shared/img/svg/arrow-right.svg";


export const createSearch = ({label}) => {
    //Создаем элементы разметки для search
    const search = document.createElement("search");

    search.innerHTML = `
        <form class="search">
            <input class="search__input" type="search" placeholder="${label}">
            <button class="search__round">
            <svg width="24" height="24">
                <use xlink:href="#icon-arrow-right"></use>
            </svg>
            </button>
        </form>
        `;
    return search
}
