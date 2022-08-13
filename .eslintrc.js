/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

// eslint-define-config可以帮助我们做语法提示
const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  // ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。

  root: true,
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },

  // 启用的规则
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-typescript/recommended', '@vue/eslint-config-prettier'],
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  parserOptions: {
    // js的版本
    ecmaVersion: 13,
    // 解析器
    parser: '@typescript-eslint/parser',
    // 模块化方案
    sourceType: 'module'
  },
  // 引用的插件  下载的插件去掉eslint-plugin-前缀引入
  plugins: ['vue', '@typescript-eslint', 'import', 'node', 'promise'],
  // 自定义规则
  rules: {
    'vue/no-unused-vars': 0,
    '@typescript-eslint/no-non-null-asserted-optional-chain': 1
  }
})
