
const actions = {
    toggleList: toggleList,
    searchInput: searchInput
}

export function handleFilterClick(event) {
    const dataset = event.target.dataset
    const closestTarget = event.target.closest('[data-filter]')
    console.log(closestTarget)
    if(dataset.filter && actions[dataset.filter]) {
        const filterNode = event.target.closest('[data-filter="item"]')
        actions[dataset.filter].call(null, filterNode)
    } else if(closestTarget && actions[closestTarget.dataset.filter]) {
        const filterNode = event.target.closest('[data-filter="item"]')
        actions[closestTarget.dataset.filter].call(null, filterNode)
    }
}

function handleInputSearch(e) {
    const target = e.target
    const filterContainerNode = target.closest('[data-filter="item"]')
    const filterListNode = filterContainerNode.querySelector('[data-filter="list"]')
    const filterListItemsNode = filterListNode.querySelectorAll('[data-filter-value]')
    const inputValue = target.value.trim().toLowerCase()
    console.log(inputValue);
    visibleListItems(filterListItemsNode)
    if(inputValue) hiddenListItems(filterListItemsNode, inputValue)
}

function toggleList(filterNode) {
    filterNode.classList.toggle('--open')
    filterNode.classList.toggle('--visible')
}

function searchInput(filterNode) {
    filterNode.addEventListener('input', handleInputSearch)
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

