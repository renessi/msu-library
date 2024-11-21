import { createTable } from "./Table";

export default {
    title: "Container/Table",
    tags: ["autodocs"],
    render: async() => {
        return await createTable();
    },
};

export const Default = {};
