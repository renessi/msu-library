
import { createCheckbox } from './Checkbox';

export default {
  title: "Component/Checkbox",
  tags: ["autodocs"],
  render: (args) => {
    return createCheckbox(args);
  },
  argTypes: {
    checked: {control: "boolean"},
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
  }
};