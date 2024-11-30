import { documentUpdate } from '@/05_entities/document/table/table.js'
// import { getSearchedDocumentsToTable } from '@/04_features/documents/documents.js';
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
    // const target = e.target
    // console.log(target,filterNode)
    // const filterContainerNode = target.closest('[data-filter="item"]')
    // const filterListNode = filterContainerNode.querySelector('[data-filter="list"]')
    const filterListItemsNode = filterNode.querySelectorAll('[data-filter-value]')
    const inputValue = input.value.trim().toLowerCase()
    console.log(inputValue);
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
        console.log(itemNode);
        itemNode.classList.remove('--hidden')
    })
}

function hiddenListItems(listItemsNode, value) {
    listItemsNode.forEach((itemNode) => {
        if(!itemNode.dataset.filterValue.includes(value)) itemNode.classList.add('--hidden')
    })
}

async function checkItem(filterContainerNode, dataFilterValue) {
    const filterGroupValue = filterContainerNode.dataset.filterGroup
    console.log(filterGroupValue, dataFilterValue, 2222222)

    store.toggleFilterValue(filterGroupValue, dataFilterValue)
    const docResponse = await getAllDocumentsToTable()

    await documentUpdate(docResponse)
}

