import gridTable from '@/05_entities/document/table/table.js'

export const createTable = () => {
    const gTable = gridTable()
    gTable.init(gridWrapper)

    return `
        <div id="gridWrapper" class="ag-theme-quartz" style="height: 300px"></div>
    `
}

