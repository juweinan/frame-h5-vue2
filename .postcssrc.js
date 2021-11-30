module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 设计稿为尺寸为 750*1334，因此基数设为 75（根据设计稿宽度除以 10）
      rootValue: 75,
      // 需要转换的属性，* 表示所有的属性都进行转换
      propList: ['*'],
    },
  },
};
