import { fn } from "@storybook/test";
import { createButton } from "./Button";

export default {
  title: "Component/Button",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    return createButton({ label, ...args });
  },
  argTypes: {
    label: { control: "text" },
    onClick: { action: "onClick" },
    type: {
      control: { type: "select" },
      options: ["default", "accent"],
    },
  },
  args: { onClick: fn() },
};

export const Accent = {
  args: {
    type: 'accent',
    label: "Button",
  },
};

export const Default = {
  args: {
    label: "Button",
  },
};

