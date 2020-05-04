//***********************************************************
// * 0 = off | 1 = warn | 2 = error
//***********************************************************
module.exports = {
  globals: {
    // Gatsby Config
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true, // Allow `window` global
    es6: true,
    node: true,
    commonjs: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // Global ESLint Settings
  // =================================
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['./', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
      },
      // Resolve Aliases
      // =================================
      alias: {
        map: [
          ['~', './src'],
          // ['@theme/styled', './src/styled'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'json', '.d.ts'],
      },
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    // 'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'react',
    'immutable',
    'jsx-a11y',
    'react-hooks',
  ],
  // https://eslint.org/docs/user-guide/configuring#report-unused-eslint-disable-comments
  reportUnusedDisableDirectives: true,
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': 2,
    '@typescript-eslint/ban-types': 2,
    '@typescript-eslint/class-name-casing': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 2,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/interface-name-prefix': 2,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/member-ordering': 2,
    '@typescript-eslint/no-empty-interface': 2,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-extraneous-class': 2,
    '@typescript-eslint/no-inferrable-types': 1,
    '@typescript-eslint/no-misused-new': 2,
    '@typescript-eslint/no-namespace': 1,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-this-alias': 2,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-use-before-declare': 0,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-interface': 0, // Allow type aliases
    '@typescript-eslint/prefer-namespace-keyword': 2,
    '@typescript-eslint/tslint/config': [
      2,
      {
        rules: {
          'comment-format': [true, 'check-space'],
          'jsdoc-format': [true, 'check-multiline-start'],
          'jsx-boolean-value': true,
          'jsx-curly-spacing': true,
          'jsx-equals-spacing': true,
          'jsx-key': true,
          'jsx-no-bind': true,
          'jsx-no-lambda': true,
          'jsx-no-multiline-js': false,
          'jsx-no-string-ref': true,
          'jsx-self-close': true,
          'jsx-space-before-trailing-slash': true,
          'jsx-wrap-multiline': false,
          'no-array-mutation': [true, 'ignore-new-array'],
          'no-class': true,
          'no-delete': true,
          'no-duplicate-imports': true,
          'no-duplicate-variable': [true, 'check-parameters'],
          'no-implicit-dependencies': false,
          'no-let': true,
          'no-method-signature': true,
          'no-mixed-interface': true,
          'no-object-mutation': true,
          'no-reference-import': true,
          'no-shadowed-variable': true,
          'no-submodule-imports': false,
          'no-this': true,
          'no-unused-expression': true,
          'only-arrow-functions': [
            true,
            'allow-declarations',
            'allow-named-functions',
          ],
          'prefer-conditional-expression': true,
          'trailing-comma': [
            true,
            {
              multiline: {
                arrays: 'ignore',
                functions: 'ignore',
                objects: 'always',
                typeLiterals: 'ignore',
              },
            },
          ],
          'triple-equals': [true, 'allow-null-check'],
          typedef: [true, 'call-signature'],
          'variable-name': [
            true,
            'ban-keywords',
            'check-format',
            'allow-pascal-case',
          ],
        },
        rulesDirectory: [
          'node_modules/tslint-immutable/rules',
          'node_modules/tslint-react/rules',
        ],
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 0,
    '@typescript-eslint/unified-signatures': 2,
    'arrow-body-style': ['off', 'as-needed'],
    'arrow-parens': ['off', 'as-needed'],
    complexity: 0,
    'constructor-super': 2,
    curly: 2,
    'dot-notation': 2,
    'eol-last': 0,
    'guard-for-in': 2,
    'immutable/no-let': 0, // modified, was 2
    'immutable/no-mutation': 2,
    'immutable/no-this': 2,
    'linebreak-style': 0,
    'max-classes-per-file': ['error', 1],
    'new-parens': 0,
    'newline-per-chained-call': 0,
    'no-bitwise': 2,
    'no-caller': 2,
    'no-cond-assign': 2,
    'no-console': 1,
    'no-debugger': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-function': 2,
    'no-eval': 2,
    'no-extra-bind': 2,
    'no-extra-semi': 2,
    'no-fallthrough': 2,
    'no-invalid-this': 2,
    'no-irregular-whitespace': 0,
    'no-multiple-empty-lines': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-param-reassign': 2,
    'no-param-reassign': 2,
    'no-return-await': 2,
    'no-sequences': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 2,
    'no-throw-literal': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unsafe-finally': 2,
    'no-unused-labels': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'one-var': ['error', 'never'],
    'prefer-const': 2,
    'prefer-object-spread': 2,
    'quote-props': 0,
    radix: 2,
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 2,
    'react/jsx-props-no-spreading': 1, // modified, was 2
    'react/prop-types': 0, // Unnecessary as we use TypeScript for type definitions
    'sort-keys': 0,
    'space-before-function-paren': 0,
    strict: 2,
    'use-isnan': 2,
    'valid-typeof': 0,
  },

  // =================================
  // Overrides for Specific Files
  // =================================
  overrides: [
    // =================================
    // TypeScript Files
    // =================================
    {
      files: ['**/*.{js,ts,tsx}'],
      rules: {
        // This project uses TS. Disable prop-types check
        'react/prop-types': 0,
        // Allow snake_case due to inconsistent APIs
        '@typescript-eslint/camelcase': 0,
        // Makes no sense to allow type inferrence for expression parameters, but require typing the response
        '@typescript-eslint/explicit-function-return-type': 0,
        // Reduce props spreading rule to a warning, not an error
        'react/jsx-props-no-spreading': 1,
      },
    },
    // =================================
    // index.ts Files (Re-exporting a directory's files)
    // =================================
    {
      files: ['**/index.{js,ts,tsx}'],
      rules: {
        // Allow named exports in a directory's index files
        'import/prefer-default-export': 0,
      },
    },
    // =================================
    // Gatsby Files
    // =================================
    {
      files: ['**/**/gatsby-*.js'],
      rules: {
        'no-console': 0,
        // Allow import devDependencies in Gatsby files.
        'import/no-extraneous-dependencies': [
          2,
          {
            devDependencies: true,
            // Tells ESLint where the path to the folder containing package.json is for nested files like /plugin/**/gatsby-*.js
            packageDir: './',
          },
        ],
        'react/no-danger': 0,
        'react/jsx-props-no-spreading': 0,
        // Allow 'jsx' in .js files
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'import/prefer-default-export': 0,
      },
    },
    // =================================
    // Test Files
    // =================================
    {
      files: ['**/test-utils/*.{js,ts,tsx}', '**/**/*.test.{js,ts,tsx}'],
      // Allow `jest` global
      extends: ['plugin:jest/recommended'],
      rules: {
        // Allow import devDependencies in tests
        'import/no-extraneous-dependencies': 0,
        'react/jsx-props-no-spreading': 0,
        'jsx-a11y/alt-text': 0,
      },
    },
    // =================================
    // Storybook Files
    // =================================
    {
      files: ['**/*.stories.{js,ts,tsx}'],
      rules: {
        // Allow import devDependencies in stories
        'import/no-extraneous-dependencies': 0,
        'react/jsx-props-no-spreading': 0,
        'jsx-a11y/alt-text': 0,
      },
    },
  ],
}
