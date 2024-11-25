import { getSearchedDocumentsToTable } from '@/04_features/documents/documents.js';
import { documentUpdate } from '@/05_entities/document/table/table.js'

const docSearchNode = document.querySelector('#documentSearch');
const docSearchInputNode = document.querySelector('#documentSearchInput');

docSearchNode.addEventListener('submit', handleSubmitDocumentSearch )
docSearchInputNode.addEventListener('input', handleInputDocumentSearch )
let ePrevValue

async function handleSubmitDocumentSearch(e) {
    e.preventDefault()
    const formValues = Object.fromEntries(new FormData(e.target));
    const docResponse = await getSearchedDocumentsToTable({prompt: formValues.search})
    await documentUpdate(docResponse)
}
async function handleInputDocumentSearch(e) {
    const eValue = e.target.value.trim()
    if(!eValue && eValue !== ePrevValue) documentUpdate()
    ePrevValue = e.target.value.trim()
}

