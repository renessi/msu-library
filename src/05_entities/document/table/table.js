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
            { file: "Теоремы и задачи функана Кириллов Гвишиани.pdf", discipline: "Функциональный анализ", type: "Литература", year: 1988, author: "", download: "" },
            { file: "Программа Экзамена Булинский", discipline: "Случайные процессы", type: "Экзамен", year: 2024, author: "Булинский А.В.", download: "" },
            { file: "Видеолекции youtube Булинский", discipline: "Случайные процессы", type: "Другие", year: 2018, author: "Булинский А.В.", download: "" },
            { file: "Лабораторная  Половинко 2019", discipline: "Уравнения мат. физики", type: "Лабораторная", year: 2019, author: "Половинко А.С.", download: "" },
            { file: "УМФ КР2 411 группа.png", discipline: "Уравнения мат. физики", type: "КР", year: 2019, author: "Половинко А.С.", download: "" }
        ],
        columnDefs: [
            { field: "file", flex: 3, checkboxSelection: true, filter: true, filterParams: filterParamsText },
            { field: "discipline", flex: 3, filter: true, filterParams: filterParamsText },
            { field: "type", flex: 3, filter: true, filterParams: filterParamsText },
            { field: "year", flex: 2, filter: 'agNumberColumnFilter',filterParams: filterParamsNumber },
            { field: "author",flex: 3, filter: true, filterParams: filterParamsText },
            { field: "download", flex: 1 }
        ],
        rowSelection: 'multiple',
    }
    return {
        init: (parentDiv) => {
            agGrid.createGrid(parentDiv, gridOptions);
        }
    }
}
export default gridTable