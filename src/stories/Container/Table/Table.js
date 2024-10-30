import gridTable from '@/05_entities/document/table/table.js'
import "@/05_entities/document/table/table.scss"

export const createTable = () => {
    const gridNode = document.createElement('div')
    gridNode.classList.add('ag-theme-msu')
    gridNode.style.cssText = "height: 500px"
    const gTable = gridTable()
    gTable.init(gridNode)

    return gridNode
}

