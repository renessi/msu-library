import {
    getSearchedDocumentsToTable
} from '@/04_features/documents/documents.js';
import {
    documentUpdate
} from '@/05_entities/document/table/table.js'
import store from '@/01_app/Store.js';

const docSearchNode = document.querySelector('#documentSearch');
const docSearchInputNode = document.querySelector('#documentSearchInput');

docSearchNode.addEventListener('submit', handleSubmitDocumentSearch)
docSearchInputNode.addEventListener('input', handleInputDocumentSearch)
let ePrevValue

async function handleSubmitDocumentSearch(e) {
    e.preventDefault()
    const formValues = Object.fromEntries(new FormData(e.target));
    store.setSearchValue(formValues.search)
    const docResponse = await getSearchedDocumentsToTable()
    await documentUpdate(docResponse)
}
async function handleInputDocumentSearch(e) {
    const eValue = e.target.value.trim()
    if (!eValue && eValue !== ePrevValue) {
        store.setSearchValue('')
        const docResponse = await getSearchedDocumentsToTable()
        await documentUpdate(docResponse)
        console.log(docResponse);

    }
    ePrevValue = e.target.value.trim()
}