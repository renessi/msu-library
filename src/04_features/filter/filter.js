import { documentUpdate } from '@/05_entities/document/table/table.js'
import { getSearchedDocumentsToTable } from '@/04_features/documents/documents.js';
import { getAllDocumentsToTable } from '@/04_features/documents/documents.js';
import store from '@/01_app/Store.js';

const actions = {
    toggleList: toggleList,
    searchInput: searchInput,
    checkItem: checkItem
}

export function handleFilterClick(event) {
    event.stopPropagation()
    const datasetFilter = event.target.dataset.filter || event.target.closest('[data-filter]').dataset.filter

    const filterContainerNode = event.target.closest('[data-filter="item"]')
    
    console.log(event.target)
    console.log(datasetFilter)
    console.log(actions[datasetFilter])

    if(datasetFilter && actions[datasetFilter]) {
        if(event.target.getAttribute('type') !== 'checkbox') { // prevent double clickEvent on checkbox component
            const dataFilterValue = event.target.dataset.filterValue || event.target.closest('[data-filter]').dataset.filterValue
            actions[datasetFilter].call(null, filterContainerNode, dataFilterValue)
        }
    } 
}

function handleInputSearch(input, filterNode) {
    const filterListItemsNode = filterNode.querySelectorAll('[data-filter-value]')
    const inputValue = input.value.trim().toLowerCase()
    visibleListItems(filterListItemsNode)
    if(inputValue) hiddenListItems(filterListItemsNode, inputValue)
}

function toggleList(filterNode) {
    filterNode.classList.toggle('--open')
    filterNode.classList.toggle('--visible')
}

function searchInput(filterNode) {
    filterNode.addEventListener('input', (e) => {handleInputSearch(e.target,filterNode) })
}

function visibleListItems(listItemsNode) {
    listItemsNode.forEach((itemNode) => {
        itemNode.classList.remove('--hidden')
    })
}

function hiddenListItems(listItemsNode, value) {
    listItemsNode.forEach((itemNode) => {
        if(!itemNode.dataset.filterValue.includes(value)) itemNode.classList.add('--hidden')
    })
}

async function checkItem(filterContainerNode, dataFilterValue) {
    const filterGroupValue = filterContainerNode.dataset.filterGroup;

    // Изменяем состояние фильтра
    store.toggleFilterValue(filterGroupValue, dataFilterValue);
    
    // Получаем обновленный список документов
    const docResponse = await getSearchedDocumentsToTable();
    const allDocsResponse = await getAllDocumentsToTable();

    // Проверяем, есть ли результаты
    if (docResponse.length > 0) {
        // Если есть, обновляем отображение
        await documentUpdate(docResponse);
    } else {
        // Если нет, получаем и отображаем все документы
        await documentUpdate(allDocsResponse);
    }
}
