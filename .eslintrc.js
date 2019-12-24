module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    // 添加⾃定义规则
    'prettier/prettier': [
      'warn', // eslint校验不成功后，error或2则报错，warn或1则警告，off或0则⽆提示
      {
        singleQuote: true,
        semi: false
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
