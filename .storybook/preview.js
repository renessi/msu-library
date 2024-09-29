import "@/index.scss";
import { themes } from '@storybook/theming';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    theme: themes.dark,
    docs: {theme: themes.dark},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;