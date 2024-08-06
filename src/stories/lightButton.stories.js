import { createLightButton } from './lightButton';

export default {
    title: "Component/lightButton",
    tags: ["autodocs"],
    render: ({ label}) => {
        return createLightButton({ label});
    },
    argTypes: {
        label: { control: "text" },
    },
};

export const lightButton = {
    args: {
        label: "Скачать все",
    },
};

