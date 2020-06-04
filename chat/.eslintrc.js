module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    semi: 'off',
    quotes: 'off',
    'linebreak-style': 'off',
    'require-jsdoc': 'off',
    'operator-linebreak': 'off',
    'arrow-parens': ['off', 'ban-single-arg-parens'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
