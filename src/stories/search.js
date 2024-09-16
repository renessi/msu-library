import "../04_features/search/ui/search.scss";
import iconUser from "@/06_shared/img/svg/arrow-right.svg";

export const createSearch = ({label}) => {
    //Создаем элементы разметки для search
    const search = document.createElement("search");

    search.innerHTML = `
        <search class="search">
            <form  class="search__form">
                <input
                class="search__input"
                type="search"
                placeholder="Поиск по материалам"
                />
                <button class="search__round">
                <svg>
                    <use href="#icon-arrow-right"></use>
                </svg>
                </button>
            </form>
        </search>
    `;
    return search
}
