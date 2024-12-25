import {
    msuClient
} from "@/01_app/api/client.js";
import {
    getAllDocumentsResourcesGet,
    searchDocumentSearchGet,
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