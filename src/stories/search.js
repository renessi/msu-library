import '../04_features/search/ui/search.scss';
import iconUser from "../06_shared/img/svg/arrow-right.svg";


export const createSearch = ({label}) => {
    //Создаем элементы разметки для search
    const search = document.createElement("search");
    const form = document.createElement("form");
    form.classList.add('search');
    const input = document.createElement("input");
    input.classList.add('search__input');
    input.type = "search";
    input.placeholder = label 
    const span = document.createElement("span");
    span.classList.add('search__round');

    //Создаем элементы svg и use, импортируем пространство имен для тэгов и атрибутов
    const searchIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
    useElement.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#icon-arrow-right");

    //Создаем архитектуру узлов разметки
    searchIcon.appendChild(useElement);
    span.appendChild(searchIcon);
    search.append(form)
    form.prepend(input)
    form.append(span)

    return search
}
