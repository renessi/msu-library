import iconDownload from "@/06_shared/img/svg/download.svg";

const gridTable = () => {
    const filterParamsText =  {
        filterOptions:['contains'],
        debounceMs: 200,
        maxNumConditions: 1
    }

    const filterParamsNumber = {
        filterOptions:['equals'],
        debounceMs: 200,
        maxNumConditions: 1
    }
    const gridOptions = {
        rowData: [
            { file: "Теоремы и задачи функана Кириллов Гвишиани.pdf", discipline: "Функциональный анализ", type: "Литература", year: 1988, author: "", download: `` },
            { file: "Программа Экзамена Булинский", discipline: "Случайные процессы", type: "Экзамен", year: 2024, author: "Булинский А.В.", download: "" },
            { file: "Видеолекции youtube Булинский", discipline: "Случайные процессы", type: "Другие", year: 2018, author: "Булинский А.В.", download: "" },
            { file: "Лабораторная  Половинко 2019", discipline: "Уравнения мат. физики", type: "Лабораторная", year: 2019, author: "Половинко А.С.", download: "" },
            { file: "УМФ КР2 411 группа.png", discipline: "Уравнения мат. физики", type: "КР", year: 2019, author: "Половинко А.С.", download: "" }
        ],
        columnDefs: [
            { field: "file", flex: 4, checkboxSelection: true, filter: true, filterParams: filterParamsText },
            { field: "discipline", filter: true, filterParams: filterParamsText },
            { field: "type", filter: true, filterParams: filterParamsText },
            { field: "year", filter: 'agNumberColumnFilter',filterParams: filterParamsNumber },
            { field: "author",filter: true, filterParams: filterParamsText },
            { field: "download",
                cellRenderer: function() {
                    return `
                        <svg class="table-img">
                            <use xlink:href="#icon-download"></use>
                        </svg>
                    `
                }
            },
        ],
        rowSelection: 'multiple',
        onGridReady: (params) => {
            params.api.sizeColumnsToFit();
            const columnsToAutoSize = ['discipline', 'type', 'year', 'author', 'download'];
            params.columnApi.autoSizeColumns(columnsToAutoSize);
        }
    }
    return {
        init: (parentDiv) => {
            agGrid.createGrid(parentDiv, gridOptions);
        }
    }
}
export default gridTable