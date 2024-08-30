
import { createCheckbox } from './Checkbox';

export default {
  title: "Component/Checkbox",
  tags: ["autodocs"],
  render: ({ label, ...args }) => {
    return createCheckbox({ label, ...args });
  },
  argTypes: {
    checked: {control: "boolean"},
    label: { control: "text" }
  },
};

export const Default = {
  args: {
    checked: false,
    label: 'Label Text'
  },
};

export const Checked = {
  args: {
    checked: true,
    label: 'Label Text'
  }
};