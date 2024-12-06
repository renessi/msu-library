// import iconDownload from "@/06_shared/img/svg/download.svg";
import {getAllDocumentsToTable, getFileByLink, downloadFileByURL} from "@/04_features/documents/documents.js"
import { authorsShortName } from '@/06_shared/utils/authors';

const parentNode = document.querySelector('#documentContainer')
let  allDocuments =await getAllDocumentsToTable()
console.log(allDocuments)
const gridTable = async() => {

    try {
        let gridApi;
        const filterParamsText =  {
            filterOptions:['contains'],
            debounceMs: 200,
            maxNumConditions: 1
        }
    
        const filterParamsNumber = {
            filterOptions:['equals'],
            debounceMs: 200,
            maxNumConditions: 1
        }
        const gridOptions = {
            rowData: allDocuments,
            columnDefs: [
                { field: "file", flex: 4, checkboxSelection: true, filter: true, filterParams: filterParamsText
                },
                { field: "discipline", flex: 2, filter: true, filterParams: filterParamsText},
                { field: "type", flex: 2, filter: true, filterParams: filterParamsText },
                { field: "year", flex: 1, filter: 'agNumberColumnFilter', filterParams: filterParamsNumber },
                { field: "author", flex: 2, filter: true, filterParams: filterParamsText,
                    cellRenderer: function({data}) {
                        const shortName = authorsShortName(data.author)
                        return `
                                <svg class="ag-theme-msu__user-img">
                                    <use xlink:href="#icon-user"></use>
                                </svg>
                                <span>${shortName}</span>
                        `
                    }
                },
                // { field: "download", flex: 1,
                //     cellRenderer: function() {
                //         return `
                //             <button class="ag-theme-msu__btn-download">  
                //                 <svg class="ag-theme-msu__download-img">
                //                     <use xlink:href="#icon-download"></use>
                //                 </svg>
                //             </button>
                //         `
                //     }
                // },
            ],
            rowHeight: 68,
            rowSelection: 'multiple',
            onRowClicked: async(event) => {
                const data = event.data
                if(data.is_file) {
                    // await getFileByLink(data.link)
                    console.info('Document can be downloaded')
                    downloadFileByURL(data.link)
                } else {
                    console.info('Document cannot be downloaded')
                    window.open(data.link, '_blank').focus();
                }
                console.log(data)
            }
            // init(params) {
            //     console.log(params)
            //     // const selectionChangedCallback = () => {
            //     //     console.log('node selected = ' + params.node.isSelected());
            //     // };

            //     // params.node.addEventListener('rowSelected', selectionChangedCallback);
            // }
        }
        return {
            init: (parentDiv) => {
                // console.log(parentDiv)
                gridApi = agGrid.createGrid(parentDiv, gridOptions);
            },
            update: (data) => {
                gridApi.setGridOption("rowData", data);
            }
        }
    } catch {
        console.log('getAllDocumentsToTable request is failed')
        return {
            error: 'Error: getAllDocument is failed'
        }
    }
    
}

const gTable = await gridTable()

export const documentInit = async () => {
    
    if(gTable.init) {
        gTable.init(parentNode)
    } else {
        parentNode.innerHTML = gTable.error
    }
}

export const documentUpdate = (data = allDocuments) => {
    if(gTable.update) {
        gTable.update(data)
    } else {
        parentNode.innerHTML = gTable.error
    }
}

