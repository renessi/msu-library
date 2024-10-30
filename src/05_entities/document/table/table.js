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
            { field: "file", flex: 4, checkboxSelection: true, filter: true, filterParams: filterParamsText
            },
            { field: "discipline", flex: 2, filter: true, filterParams: filterParamsText},
            { field: "type", flex: 2, filter: true, filterParams: filterParamsText },
            { field: "year", flex: 1, filter: 'agNumberColumnFilter', filterParams: filterParamsNumber },
            { field: "author", flex: 2, filter: true, filterParams: filterParamsText,
                cellRenderer: function() {
                    return `
                            <svg class="ag-theme-msu__user-img">
                                <use xlink:href="#icon-user"></use>
                            </svg>
                            <span>Половинко А.С.</span>
                    `
                }
            },
            { field: "download", flex: 1,
                cellRenderer: function() {
                    return `
                        <button class="ag-theme-msu__btn-download">  
                            <svg class="ag-theme-msu__download-img">
                                <use xlink:href="#icon-download"></use>
                            </svg>
                        </button>
                    `
                }
            },
        ],
        rowHeight: 68,
        rowSelection: 'multiple'
    }
    return {
        init: (parentDiv) => {
            agGrid.createGrid(parentDiv, gridOptions);
        }
    }
}
export default gridTable