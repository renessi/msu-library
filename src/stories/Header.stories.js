import { createHeader } from "./header";



export default {
    title: "Component/Header",
    tags: ["autodocs"],
    render: () => {
        return createHeader();
    },
    // argTypes: {
    //     label: { control: "text" },
    // },
};

export const DefaultHeader = {
    args: {
        
    },
};