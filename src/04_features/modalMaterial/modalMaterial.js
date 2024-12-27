import { addMaterialPageResource } from '@/04_features/documents/documents.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sumbmitButton'); // Форма для загрузки
    console.log(form);
    if (form) { // Убедимся, что элемент формы существует
        form.addEventListener('click', (event) => {
            event.stopPropagation()
            event.preventDefault(); // Предотвращаем перезагрузку страницы
            
            try {
                // Получение данных из полей
                const name = document.getElementById('name')?.value || '';
                const semester_num = document.getElementById('semester')?.value || '';
                const subject = document.getElementById('subject')?.value || '';
                const teacher = document.getElementById('professor')?.value || '';
                const category = document.getElementById('category')?.value || '';
                const year = document.getElementById('year')?.value || '';
                const link = document.getElementById('link')?.value || '';
                const is_file = document.getElementById('is_file')?.checked || false;

                // Вызов функции добавления ресурса
                addMaterialPageResource(name, year, link, is_file, teacher,subject,category,semester_num
                );
            } catch (error) {
                console.error('Ошибка при обработке формы:', error);
            }
        }, false);
    } else {
        console.error('Форма с ID "upload-form" не найдена.');
    }
}, false);
