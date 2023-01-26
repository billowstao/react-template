module.exports = {
  root: true,
  plugins: [
    // JavaScript
    'import',
    'promise',
    'compat',
    'unicorn',
    // React
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  extends: [
    // JavaScript
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:compat/recommended',
    'plugin:unicorn/recommended',
    // React
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    // Airbnb
    'airbnb',
    'plugin:react/jsx-runtime', // React new JSX transform override
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  settings: {
    // eslint-plugin-import
    'import/extensions': [
      '.js',
      '.mjs',
      '.cjs',
      '.jsx',
      '.ts',
      '.mts',
      '.cts',
      '.tsx',
    ],
    'import/resolver': {
      node: true,
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.mts', '.cts', '.tsx'],
    },
    // React
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'always',
        mjs: 'always',
        cjs: 'always',
        jsx: 'always',
        ts: 'never',
        mts: 'never',
        cts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': ['off'],
    'import/no-unresolved': ['off'],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/no-unknown-property': [
      'error',
      {
        ignore: [
          'css', // Emotion
        ],
      },
    ],
    'unicorn/no-null': ['off'],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          props: {
            properties: false,
          },
        },
      },
    ],
  },
  overrides: [
    // JavaScript
    {
      files: ['**/*.{js,mjs,cjs,jsx}'],
      plugins: ['jsdoc'],
      extends: ['plugin:jsdoc/recommended'],
    },
    // TypeScript
    {
      files: ['**/*.{ts,mts,cts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', './tsconfig.node.json'],
      },
      plugins: ['@typescript-eslint', 'tsdoc'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript',
      ],
      rules: {
        'tsdoc/syntax': ['warn'],
        'no-shadow': ['off'],
        '@typescript-eslint/no-shadow': ['error'],
      },
    },
    // Node.js Utility
    {
      files: ['./*.{js,mjs,cjs,ts,mts,cts}', 'config/scripts/*.ts'],
      plugins: ['n'],
      extends: ['plugin:n/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: ['./*.{js,mjs,cjs,ts,mts,cts}', 'config/**/*.ts'],
          },
        ],
      },
    },
    // Node.js CommonJS
    {
      files: ['**/*.{cjs,cts}'],
      rules: {
        'unicorn/prefer-module': ['off'],
        'import/no-import-module-exports': ['off'],
      },
    },
    // Turn off rules conflict with Prettier
    {
      files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],
      extends: ['prettier'],
    },
  ],
};
