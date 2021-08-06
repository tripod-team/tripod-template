/**
 * feat     ✨  引入新功能
 * fix      🐛  修复 bug
 * style    💄  更新 UI 样式文按键
 * format   🥚  格式化代码
 * docs     📝  添加/更新文档
 * perf     👌  提高性能/优化
 * init     🎉  初次提交/初始化项目
 * test     ✅  增加测试代码
 * refactor 🎨  改进代码结构/代码格式
 * patch    🚑  添加重要补丁
 * file     📦  添加新文件
 * publish  🚀  发布新版本
 * tag      📌  发布新版本
 * config   🔧  修改配置文件
 * git      🙈  添加或修改.gitignore 文件
 */
module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-enum': [2, 'always', [
      'feat', 'fix', 'style', 'format', 'docs', 'perf', 'init', 'test', 'refactor', 'patch', 'file', 'publish', 'tag', 'config', 'git'
    ]],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
