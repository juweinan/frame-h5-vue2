module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // tab 用两个空格代替
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 添加分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时使用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // es5 中有效的结尾逗号
  trailingComma: 'es5',
  // 大括号内的首位需要空格
  bracketSpacing: true,
  // 将多行 HTML（HTML、JSX、Vue、Angular）元素的 > 放在最后一行的末尾
  bracketLine: true,
  // jsx 标签的反尖括号不需要换行
  jsxBracketSameLine: true,
  // 箭头函数只有一个参数时，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 换行符使用 lf
  endOfLine: 'lf',
  // 优化html闭合标签不换行的问题
  htmlWhitespaceSensitivity: 'ignore',
};
