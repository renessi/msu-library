import { createSearch } from "./search"



export default {
    title: "Component/Search",
    tags: ["autodocs"],
    render: ({ label}) => {
        return createSearch({ label});
    },
    argTypes: {
        label: { control: "text" },
    },
};

export const DefaultSearch = {
    args: {
        label: "Поиск по материалам",
    },
};