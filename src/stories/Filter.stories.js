import { createFilter } from "./filter";

export default {
    title: "Component/Filter",
    tags: ["autodocs"],
    render: ({ label}) => {
        return createFilter({ label});
    },
    argTypes: {
        label: { control: "text" },
    },
};

export const DefaultFilter = {
    args: {
        label: "Предмет",
    },
};