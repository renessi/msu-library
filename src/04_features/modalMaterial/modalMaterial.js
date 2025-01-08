import {
    addMaterialPageResource
} from '@/04_features/documents/documents.js';
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    const loginModal = document.getElementById('login-modal');
    
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
                
                const isFile = document.getElementById('upload-file').checked;
                let link = '';
                
                if (isFile) {
                    const fileInput = document.getElementById('file');
                    if (fileInput.files.length > 0) {
                        // Получаем имя файла, вы можете изменить это для ваших нужд
                        link = fileInput.files[0].name; 
                    }
                } else {
                    link = document.getElementById('link')?.value || '';
                }

                addMaterialPageResource(name, year, link, isFile, teacher, subject, category, semester_num);
            } catch (error) {
                console.error('Ошибка при обработке формы:', error);
            }
            console.log(link);
        }, false);
    } else {
        console.error('Кнопка с ID "submitButton" не найдена.');
    }
}, false);

