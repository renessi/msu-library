import { createHeader } from "./header";



export default {
    title: "Container/Header",
    tags: ["autodocs"],
    render: (args) => {
        console.log(args)
        return createHeader(args);
    },
    argTypes: {
        btns: { 
            control: 'check', 
            options: ['download', 'addDocs'] 
        }
    },
};

export const UnauthorizeHeader = {
    args: {
        btns: []
    },
};

export const AdminHeader = {
    args: {
        btns: ['download', 'addDocs'] 
    },
};