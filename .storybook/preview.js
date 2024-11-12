import "@/index.scss";
import { themes } from '@storybook/theming';
import { withMultiselect } from 'storybook-addon-multiselect';

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
      ]
    }
  }
  },
};
export const decorators = [
  withMultiselect,
];

export default preview;

import "../src/index.scss"
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/ag-grid-community/dist/ag-grid-community.min.js';
document.head.appendChild(script);
