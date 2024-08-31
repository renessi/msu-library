import { fn } from "@storybook/test";
import { createButton } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Component/Button",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export const Accent = {
  args: {
    type: 'accent',
    label: 'Добавить материал',
  },
};

export const Default = {
  args: {
    primary: true,
    label: 'Скачать все',
    backgroundColor: '#aa0000'
  },
};
