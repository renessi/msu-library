import { createSidebar } from "./sidebar";
import { withMultiselect } from 'storybook-addon-multiselect';

export default {
    title: "Container/Sidebar",
    tags: ["autodocs"],
    render: ({ label}) => {
        return createSidebar({ label});
    },
    argTypes: {
        label: { control: "text" },
    },
    parameters: {
        multiselect: {
            example: {
                icon: '💾',
                elements: [
                    {
                        type: 'singleSelect',
                        queryKey: 'example',
                        options: [
                            { title: 'Option 1', value: 'option1' },
                            { title: 'Option 2', value: 'option2' },
                            { title: 'Option 3', value: 'option3' }
                        ]
                    }
                ],
                onChange: `(values, api) => {
                    const { emit } = api;
                    emit('customEmit', values);

                    if (values.includes('option1')) {
                        return [...values, 'option2'];
                    }
                    return values;
                }`
            }
        }
    },
    decorators: [withMultiselect]
};

export const DefaultFilter = {
    args: {
        label: "Label Text",
    },
    
};
