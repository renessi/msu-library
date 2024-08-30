const gridOptions = {
    rowData: [
        { choice: "", file: "Теоремы и задачи функана Кириллов Гвишиани.pdf", discipline: "Функциональный анализ", type: "Литература", year: 1988, author: "", download: "" },
        { choice: "", file: "Программа Экзамена Булинский", discipline: "Случайные процессы", type: "Экзамен", year: 2024, author: "Булинский А.В.", download: "" },
        { choice: "", file: "Видеолекции youtube Булинский", discipline: "Случайные процессы", type: "Другие", year: 2018, author: "Булинский А.В.", download: "" },
        { choice: "", file: "Лабораторная  Половинко 2019", discipline: "Уравнения мат. физики", type: "Лабораторная", year: 2019, author: "Половинко А.С.", download: "" },
        { choice: "", file: "УМФ КР2 411 группа.png", discipline: "Уравнения мат. физики", type: "КР", year: 2019, author: "Половинко А.С.", download: "" }
    ],
    columnDefs: [
        { field: "choice" },
        { field: "file" },
        { field: "discipline" },
        { field: "type" },
        { field: "year" },
        { field: "author" },
        { field: "download" }
    ]
};

const eDiv = document.querySelector('#grid');
const gridApi = agGrid.createGrid(eDiv, gridOptions);

export gridApi;