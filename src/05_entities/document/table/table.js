import {
    getAllDocumentsToTable,
    downloadFileByURL
} from "@/04_features/documents/documents.js"
import {
    authorsShortName
} from '@/06_shared/utils/authors';

const parentNode = document.querySelector('#documentContainer');
let allDocuments = [];

try {
    allDocuments = await getAllDocumentsToTable();
    allDocuments = allDocuments.slice(0, 500);
    console.log('All documents:', allDocuments);
} catch (error) {
    console.error('Failed to load documents:', error);
}

const gridTable = async () => {
    try {
        let gridApi;

        const gridOptions = {
            rowData: allDocuments.slice(0, 500),
            columnDefs: [
                { field: "file", checkboxSelection: true, filter: true },
                { field: "discipline", filter: true },
                { field: "type", filter: true },
                { field: "year", filter: 'agNumberColumnFilter' },
                { 
                    field: "author", 
                    filter: true,
                    cellRenderer: ({ data }) => `<span>${authorsShortName(data.author)}</span>`
                }
            ],
            
            rowHeight: 68,
            onRowClicked: async (event) => {
                const data = event.data;
                try {
                    if (data.is_file) {
                        console.info('Document can be downloaded');
                        await downloadFileByURL(data.link); // Скачивание файла
                    } else {
                        console.info('Document cannot be downloaded');
                        window.open(data.link, '_blank').active();
                    }
                } catch (error) {
                    console.error('Error handling row click:', error);
                }
            }
        };

        return {
            init: (parentDiv) => {
                gridApi = agGrid.createGrid(parentDiv, gridOptions);
            },
            update: (data) => {
                gridApi.setRowData(data);
            }
        };
    } catch (error) {
        console.error('Error initializing table:', error);
        return { error: 'Failed to initialize table' };
    }
};

const gTable = await gridTable();

export const documentInit = async () => {
    if (gTable.init) {
        gTable.init(parentNode);
    } else {
        parentNode.innerHTML = gTable.error;
    }
};

export const documentUpdate = (data = allDocuments) => {
    if (gTable.update) {
        gTable.update(data);
    } else {
        parentNode.innerHTML = gTable.error;
    }
};
