module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // 按需加载 vant 组件
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
      'vant',
    ],
  ],
};
