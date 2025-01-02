import {
    msuClient
} from "@/01_app/api/client.js";
import {
    getAllDocumentsResourcesGet,
    searchDocumentSearchGet,
    addMaterialPageResourcePost
} from "@/01_app/api/client/services.gen";
import store from "@/01_app/Store.js";
/**
 * @typedef Document
 * @property {string} file
 * @property {string} discipline
 * @property {string} type
 * @property {number} year
 * @property {string} author
 * @property {boolean} is_file
 * @property {string} document_id
 * @property {string} link
 */
/**
 * Получение всех документов для таблицы
 * @returns {Promise<Array<Document>>}
 */
export const getAllDocumentsToTable = async () => {
    const filterQuery = {
        subjectArray: store.subject.size ? store.getFilterArrByKey('subject').join(',') : '',
        semesterArray: store.semester.size ? store.getFilterArrByKey('semester').join(',') : '',
        teacherArray: store.teacher.size ? store.getFilterArrByKey('teacher').join(',') : '',
        subjectTypeArray: store.category.size ? store.getFilterArrByKey('category').join(',') : '',
    };
    const {
        data
    } = await getAllDocumentsResourcesGet({
        client: msuClient,
        query: {
            ...filterQuery
        }
    });
    const mappedData = data.map((document) => ({
        file: document.name,
        discipline: document.subject_name,
        type: document.category_name,
        year: document.year,
        author: document.teacher_name,
        is_file: document.is_file,
        document_id: document.document_id,
        link: document.link
    }));
    return mappedData;
};

let isLoading = false;
let errorMessage = null;

const handleLogin = async (username, password) => {
    errorMessage = null;

    if (username && password) {
        isLoading = true;
        try {
            const requestBody = new URLSearchParams({
                grant_type: "password",
                username: username,
                password: password,
                scope: "read write",
                client_id: "",
                client_secret: "",
            }).toString();
            // const response = await fetch(`${process.env.NODE_ENV}/login`,
            const response = await fetch(production ? 'https://51.250.43.136:8080/' : 'https://51.250.43.136/', {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: requestBody,
            });
            
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('access_token', data.access_token);
                document.getElementById('login-modal').style.display = 'none';
                location.reload();
            } else {
                const data = await response.json();
                errorMessage = data.message || "Неправильный логин или пароль";
            }
        } catch (error) {
            if (error instanceof Error) {
                errorMessage = "Ошибка при отправке данных: " + error.message;
            } else {
                errorMessage = "Неизвестная ошибка";
            }
        } finally {
            isLoading = false;
        }
    } else {
        errorMessage = "Заполните все поля!";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const errorMessageElement = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        errorMessageElement.textContent = "";
        await handleLogin(username, password);
        if (errorMessage) {
            errorMessageElement.textContent = errorMessage;
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    });

    const closeButton = document.getElementById("modal-close");
    closeButton.addEventListener("click", () => {
        const modal = document.getElementById("login-modal");
        modal.style.display = "none";
    });
});


/**
 * Поиск документов по запросу
 * @param {string} searchValue
 * @returns {Promise<Array<Document>>}
 */
export const getSearchedDocumentsToTable = async () => {
    const filterQuery = {
        subjectArray: store.subject.size ? store.getFilterArrByKey('subject').join(',') : '',
        semesterArray: store.semester.size ? store.getFilterArrByKey('semester').join(',') : '',
        teacherArray: store.teacher.size ? store.getFilterArrByKey('teacher').join(',') : '',
        subjectTypeArray: store.category.size ? store.getFilterArrByKey('category').join(',') : '',
    };
    const {
        data
    } = await searchDocumentSearchGet({
        client: msuClient,
        query: {
            prompt: store.search,
            ...filterQuery
        }
    });
    const mappedData = data.map((document) => ({
        file: document.name,
        discipline: document.subject_name,
        type: document.category_name,
        year: document.year,
        author: document.teacher_name,
        is_file: document.is_file,
        document_id: document.document_id,
        link: document.link
    }));
    return mappedData;

};


export const getUniqueOptions = async () => {
    const filterQuery = {
        subjectArray: store.subject.size ? store.getFilterArrByKey('subject').join(',') : '',
        semesterArray: store.semester.size ? store.getFilterArrByKey('semester').join(',') : '',
        subjectTypeArray: store.category.size ? store.getFilterArrByKey('category').join(',') : '',
    };

    const { data } = await searchDocumentSearchGet({
        client: msuClient,
        query: {
            prompt: store.search,
            ...filterQuery
        }
    });

    const semestersSet = new Set(data.map(document => document.semester_num));
    const uniqueSemesters = Array.from(semestersSet).sort((a, b) => a - b); 

    const subjectsSet = new Set(data.map(document => document.subject_name));
    const uniqueSubjects = Array.from(subjectsSet);

    const professorsSet = new Set(data.map(document => document.teacher_name));
    const uniqueProfessors = Array.from(professorsSet);

    const categoriesSet = new Set(data.map(document => document.category_name));
    const uniqueCategories = Array.from(categoriesSet);

    return {
        semesters: uniqueSemesters,
        subjects: uniqueSubjects,
        professors: uniqueProfessors,
        categories: uniqueCategories
    };
};

/**
 * Прямая загрузка файла по URL
 * @param {string} fileURL
 */
export const downloadFileByURL = async (fileURL) => {
    try {
        const downloadLink = document.createElement('a');
        downloadLink.href = fileURL;
        downloadLink.download = fileURL.split('/').pop() || 'file';
        downloadLink.setAttribute('target', '_blank');
        downloadLink.target = '_self';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    } catch (error) {
        console.error(error.message);
        const text = 'Файл для скачивания не был найден.';
        const errorNotification = document.createElement('div');
        errorNotification.innerText = text;
        errorNotification.style.position = 'fixed';
        errorNotification.style.top = '20px';
        errorNotification.style.right = '50%';
        errorNotification.style.transform = 'translate(50%, 0)';
        errorNotification.style.backgroundColor = '#f95d5d';
        errorNotification.style.color = 'white';
        errorNotification.style.textAlign = 'center';
        errorNotification.style.padding = '10px';
        errorNotification.style.width = '300px';
        errorNotification.style.borderRadius = '5px';
        errorNotification.style.zIndex = '999';
        document.body.appendChild(errorNotification);
        setTimeout(() => {
            document.body.removeChild(errorNotification);
        }, 1000);
    }
};
/**
 * @param {string} searchValue for prompt
 * @returns { Array<Document> } Documents for catalog table {@link Document}
 */

export const addMaterialPageResource = async (name, year, link, is_file, teacher_name, subject_name, category_name, semester_num) => {
    try {
        const {
            data
        } = await addMaterialPageResourcePost({
            client: msuClient,
            body: {
                name: name,
                year: year,
                link: link,
                is_file: is_file,
                teacher_name: teacher_name,
                subject_name: subject_name,
                category_name: category_name,
                semester_num: semester_num,
            }
        });
        console.log('Ресурс успешно добавлен:', data);
        location.reload();
        return data;
    } catch (error) {
        console.error('Ошибка при добавлении ресурса:', error.message);
        throw error;
    }
};