module.exports = {
  // 使用 postcss-pxtorem 适配移动端
  plugins: {
    'postcss-pxtorem': {
      // 设计稿为尺寸为 750*1334，因此基数设为 75（根据设计稿宽度除以 10）
      rootValue: ({ file }) => {
        // 如果是 vant 则为 37.5（保持 vant 组件的尺寸），非 vant 组件样式基数为 75
        return file.indexOf('vant') !== -1 ? 37.5 : 75;
      },
      // 需要转换的属性，* 表示所有的属性都进行转换
      propList: ['*'],
    },
  },
  // 使用 postcss-px-to-viewport 适配移动端
  /* plugins: {
    autoprefixer: {}, // 用来给不同的浏览器自动添加相应的前缀
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 750, // UI 设计稿的宽度
      unitPrecision: 6, // 转换后的京都，即小数点位数
      propList: ['*'], // 指定转换的 css 属性的单位，* 代表全部 css 属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认 vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认 vw
      selectorBlackList: [], // 指定不转换为视窗单位的类名
      minPixelValue: 1, // 默认值为 1，小于或等于 1px 则不进行转换
      mediaQuery: true, // 是否在媒体查询的 css 代码中也进行转换，默认为 false
      replace: true, // 是否转换后直接更换属性值
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      landscape: false, // 是否处理横屏情况
    },
  }, */
};
