module.exports = {
  'src/**/*.{js,jsx,vue,ts,tsx}': ['eslint --fix', 'prettier --write', 'git add'],
  'src/**/*.{html,vue,css,sass,scss,less}': [
    'stylelint --fix --custom-syntax postcss-html',
    'prettier --write',
    'git add',
  ],
};
