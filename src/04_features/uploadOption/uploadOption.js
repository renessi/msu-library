import { getUniqueOptions } from "@/04_features/documents/documents.js";
document.addEventListener('DOMContentLoaded', async function() {
    const selects = document.querySelectorAll('.custom-select'); 

    const [semesterSelect, subjectSelect, professorSelect, categorySelect] = selects;
    const hiddenInputSemester = document.getElementById('semester');
    const hiddenInputSubject = document.getElementById('subject_name');
    const hiddenInputProfessor = document.getElementById('professor');
    const hiddenInputCategory = document.getElementById('category_name');

    const { semesters, subjects, professors, categories } = await loadOptions();

    populateSelect(semesterSelect.querySelector('.options'), semesters, semesterSelect.querySelector('.selected'), hiddenInputSemester);
    populateSelect(subjectSelect.querySelector('.options'), subjects, subjectSelect.querySelector('.selected'), hiddenInputSubject);
    populateSelect(professorSelect.querySelector('.options'), professors, professorSelect.querySelector('.selected'), hiddenInputProfessor);
    populateSelect(categorySelect.querySelector('.options'), categories, categorySelect.querySelector('.selected'), hiddenInputCategory);

    selects.forEach(select => {
        const selected = select.querySelector('.selected');
        const optionsContainer = select.querySelector('.options');

        selected.addEventListener('click', (event) => {
            closeAllSelects(selects, optionsContainer);
            optionsContainer.style.display = optionsContainer.style.display === 'block' ? 'none' : 'block';
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
            option.addEventListener('click', function() {
                selectedElement.textContent = optionValue;
                hiddenInput.value = optionValue; 
                optionsContainer.style.display = 'none'; 
            });
            optionsContainer.appendChild(option);
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
