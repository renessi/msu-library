import { createColors } from "./colors";
import './colors.scss';

export default {
    title: "Component/Colors",
    tags: ["autodocs"],
    argTypes: {

    }
  };

const Template =({...args}) => {
    return createColors({...args})
}

export const DefaultColors = Template.bind({})
DefaultColors.argTypes = {

}