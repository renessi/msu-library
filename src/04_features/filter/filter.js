const actions = {
    openSearch: openSearch,
    toggleList: toggleList
}

export function handleFilterClick(event) {
    // debugger
    console.dir(event.target)
    const dataset = event.target.dataset
    const closestTarget = event.target.closest('[data-filter]')
    console.log(closestTarget)
    if(dataset.filter && actions[dataset.filter]) {
        const filterNode = event.target.closest('[data-filter="item"]')
        actions[dataset.filter].call(null, filterNode) //actions[dataset.filter]()
    } else if(closestTarget && actions[closestTarget.dataset.filter]) {
        const filterNode = event.target.closest('[data-filter="item"]')
        actions[closestTarget.dataset.filter].call(null, filterNode)
    }
}

function openSearch(filterNode) {
    console.log(filterNode,'openSearch')
    filterNode.classList.toggle('--visible')
}


function toggleList(filterNode) {
    console.log(filterNode, 'toggleList')
    filterNode.classList.toggle('--open')
    // down.classList.toggle('filter__img--rotate');
    // menu.classList.toggle('filter__menu--open');

}
// filters.forEach(filter => {
//     const down = filter.querySelector('.filter__img');
//     const menu = filter.querySelector('.filter__menu');
    
//     filter.addEventListener('click', () => {
//         down.classList.toggle('filter__img--rotate');
//         menu.classList.toggle('filter__menu--open');
//     });
// });
// console.log(filters);

