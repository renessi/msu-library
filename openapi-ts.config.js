import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-fetch',
  input:
    './src/01_app/api/msu.yaml',
  output: {
    format: 'prettier',
    path: './src/01_app/api/client',
  },
  plugins: [
    '@hey-api/schemas',
    '@hey-api/services',
    {
      dates: true,
      name: '@hey-api/transformers',
    },
    {
      enums: 'javascript',
      name: '@hey-api/types',
    },
  ],
});
