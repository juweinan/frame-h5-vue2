module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': ['warn', { props: false }],
    // 关闭 ts 驼峰校验
    '@typescript-eslint/camelcase': 'off',
    // 禁止使用特定类型
    '@typescript-eslint/ban-types': 'off',
    // 禁止使用 @ts-ignore 注释
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 允许使用 require 导入方式
    '@typescript-eslint/no-var-requires': 'off',
    // 自动排序 import/exports 导入导出
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // import 始终放在最前面
    'import/first': 'error',
    // import 后面添加新的空行
    'import/newline-after-import': 'error',
    // 防止一个文件中多次引入同一个模块
    'import/no-duplicates': 'error',
    // 语句太长时，不在分割表达式运算符旁边插入换行符
    'operator-linebreak': 'off',
  },
};
