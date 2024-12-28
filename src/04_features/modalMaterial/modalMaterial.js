import {
    addMaterialPageResource
} from '@/04_features/documents/documents.js';

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    const loginModal = document.getElementById('login-modal');
    console.log(submitButton);
    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.stopPropagation();
            event.preventDefault();

            const token = localStorage.getItem('access_token');
            if (!token) {
                loginModal();
                return;
            }
            try {
                const name = document.getElementById('name')?.value || '';
                const semester_num = document.getElementById('semester')?.value || '';
                const subject = document.getElementById('subject_name')?.value || '';
                const teacher = document.getElementById('professor')?.value || '';
                const category = document.getElementById('category_name')?.value || '';
                const year = document.getElementById('year')?.value || '';
                const link = document.getElementById('link')?.value || '';
                const is_file = document.getElementById('is_file')?.checked || false;
                addMaterialPageResource(name, year, link, is_file, teacher, subject, category, semester_num);
            } catch (error) {
                console.error('Ошибка при обработке формы:', error);
            }
        }, false);
    } else {
        console.error('Кнопка с ID "submitButton" не найдена.');
    }
}, false);