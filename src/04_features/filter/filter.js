const actions = {
    toggleList: toggleList
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

function toggleList(filterNode) {
    filterNode.classList.toggle('--open')
    filterNode.classList.toggle('--visible')

}


