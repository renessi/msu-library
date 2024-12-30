import {
    getUniqueOptions
} from "@/04_features/documents/documents.js";

document.addEventListener('DOMContentLoaded', async function () {
    const selects = document.querySelectorAll('.custom-select'); 

    const [semesterSelect, subjectSelect, professorSelect, categorySelect] = selects;
    const hiddenInputSemester = document.getElementById('semester');
    const hiddenInputSubject = document.getElementById('subject_name');
    const hiddenInputProfessor = document.getElementById('professor');
    const hiddenInputCategory = document.getElementById('category_name');

    const {
        semesters,
        subjects,
        professors,
        categories
    } = await loadOptions();

    const selectConfigs = [{
            select: semesterSelect,
            options: semesters,
            input: hiddenInputSemester
        },
        {
            select: subjectSelect,
            options: subjects,
            input: hiddenInputSubject
        },
        {
            select: professorSelect,
            options: professors,
            input: hiddenInputProfessor
        },
        {
            select: categorySelect,
            options: categories,
            input: hiddenInputCategory
        },
    ];

    selectConfigs.forEach(({
        select,
        options,
        input
    }) => {
        populateSelect(select.querySelector('.options'), options, select.querySelector('.selected'), input);
    });

    selects.forEach(select => {
        const selected = select.querySelector('.selected');
        const optionsContainer = select.querySelector('.options');

        selected.addEventListener('click', (event) => {
            closeAllSelects(selects, optionsContainer);
            optionsContainer.style.display = 'block';
            if (!selected.querySelector('.search-input')) {
                createSearchInput(selected, optionsContainer);
            }

            selected.querySelector('.search-input').focus();
            event.stopPropagation();
        });

        document.addEventListener('click', (event) => {
            if (!select.contains(event.target)) {
                optionsContainer.style.display = 'none';
            }
        });
    });

    async function loadOptions() {
        try {
            return await getUniqueOptions();
        } catch (error) {
            console.error('Ошибка при загрузке опций:', error);
        }
    }

    function populateSelect(optionsContainer, options, selectedElement, hiddenInput) {
        optionsContainer.innerHTML = '';

        options.forEach(optionValue => {
            const option = document.createElement('div');
            option.classList.add('option');
            option.textContent = optionValue;

            option.addEventListener('click', function (event) {
                const currentSelected = selectedElement.querySelector('span');
                if (currentSelected) {
                    currentSelected.textContent = optionValue;
                } else {
                    selectedElement.innerHTML = '';
                    selectedElement.appendChild(createSelectedOption(optionValue));
                }
                hiddenInput.value = optionValue;
                optionsContainer.style.display = 'none';
                event.stopPropagation();
            });

            optionsContainer.appendChild(option);
        });
    }

    function createSelectedOption(value) {
        const span = document.createElement('span');
        span.textContent = value;
        return span;
    }

    function createSearchInput(selected, optionsContainer) {
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Поиск...';
        searchInput.classList.add('search-input');
        selected.innerHTML = '';
        selected.appendChild(searchInput);

        searchInput.addEventListener('input', function () {
            const filter = searchInput.value.toLowerCase();
            const optionElements = optionsContainer.querySelectorAll('.option');

            optionElements.forEach(option => {
                const text = option.textContent.toLowerCase();
                option.style.display = text.includes(filter) ? 'block' : 'none';
            });
        });
    }

    function closeAllSelects(selects, currentOptionsContainer) {
        selects.forEach(select => {
            const optionsContainer = select.querySelector('.options');
            if (optionsContainer !== currentOptionsContainer) {
                optionsContainer.style.display = 'none';
            }
        });
    }
});