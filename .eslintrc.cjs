module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'react'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "indent": ["error", 2],
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "no-trailing-spaces": "error",
    "eol-last": "error",
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true
      }
    ],
    "react/jsx-max-props-per-line": ["error", { "maximum": 1 }],
    "react/jsx-closing-bracket-location": [1, "line-aligned"],
    "react/jsx-first-prop-new-line": [1, "multiline"],
  },
}
