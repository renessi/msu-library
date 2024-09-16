import iconUser from "@/06_shared/img/svg/arrow-right.svg";
import iconUserLogin from "@/06_shared/img/svg/user.svg";
import IconLogo from "@/06_shared/img/svg/logo.svg";

export const createHeader = ({
    btns
}) => {
    const header = document.createElement("section");

    let btnsHtml = ''
    if(btns.indexOf('download') !== -1) btnsHtml += `
        <button type="button" class="btn" tabindex="0">Скачать все</button>
    `
    if(btns.indexOf('addDocs')  !== -1) btnsHtml += `
        <button type="button" class="btn--accent" tabindex="0">Добавить материал</button>  
    `

    header.innerHTML = `
    <header class="header">
        <svg class="header__logo">
            <use xlink:href="#icon-logo"></use>
        </svg>
        <search class="search">
            <form class="search__form">
                <input class="search__input" type="search" placeholder="Поиск по материалам">
                <button class="search__round">
                <svg class="search__icon">
                    <use href="#icon-arrow-right"></use>
                </svg>
                </button>
            </form>
        </search>
        ${btnsHtml}
        <button class="header__login">
            <svg class="header__icon">
                <use href="#icon-user"></use>
            </svg>
        </button>
    </header> `;
    return header
}
