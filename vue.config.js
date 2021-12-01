// https://cli.vuejs.org/zh/config/
const { resolve } = require('path');

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';

const useGlobalStyle = (rule) => {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // 需要全局导入的 less 变量
        resolve(__dirname, './src/assets/style/variables.less'),
      ],
    });
};

module.exports = {
  publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : '/', // 生产环境下使用指定的 publiPath（取决于项目放在域名的哪个目录下），默认为根目录
  assetsDir: 'static', // 静态文件打包目录
  productionSourceMap: !IS_PROD, // 生产环境是否生成 sourcemap.json，如果为 true 则影响打包速度

  devServer: {
    open: true, // 是否打开浏览器
    proxy: {
      '/api': {
        target: 'https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets', // 目标代理接口服务器地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },

  chainWebpack: (config) => {
    // 全局引用指定的 less 文件
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => useGlobalStyle(config.module.rule('less').oneOf(type)));

    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@utils', resolve('src/utils'));

    // 开启预加载，可以提高第一屏的速度
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial',
      },
    ]);

    // 用于将依赖包分开打包，暂时不知道原理
    config.when(!IS_DEV, (config) => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial',
          },
          vantUI: {
            name: 'chunk-vantUI',
            priority: 20,
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/,
          },
          commons: {
            name: 'chunk-commons',
            test: resolve(__dirname, 'src/components'),
            minChunks: 3,
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk('single');
    });
  },
};
