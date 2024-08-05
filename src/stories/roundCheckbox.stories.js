import { createRoundCheckbox } from "./roundCheckbox";

export default {
    title: "Component/Round Checkbox",
    tags: ["autodocs"],
    render: (args) => {
        return createRoundCheckbox(args);
    },
    argTypes: {
        checked: { control: "boolean" },
    },
};

export const Default = {
    args: {
        checked: false,
    },
};

export const Checked = {
    args: {
        checked: true,
    },
};
