import { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  schema: `${process.env.GRAPH_BASE_URL}/graphql`,
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/lib/apollo-client/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
