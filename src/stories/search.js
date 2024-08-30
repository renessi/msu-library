
import '@/index.scss';
import iconUser from "@/06_shared/img/svg/arrow-right.svg";


export const createSearch = ({label}) => {
    //Создаем элементы разметки для search
    const search = document.createElement("search");

    search.innerHTML = `
        <div style="background: rgba(0, 0, 0, 1)">
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
        </div>
        `;
    return search
}
