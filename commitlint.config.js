/**
* feature：新功能
* update：更新某功能
* fixbug：修补某功能的bug
* refactor：重构某个功能
* optimize: 优化构建工具或运行时性能
* style：仅样式改动
* docs：仅文档新增/改动
* chore：构建过程或辅助工具的变动
*/
module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-enum': [
        2,
        'always',
        [
            "feat", // 增加新功能
            "fix", // 修复bug
            "docs", // 只改动了文档相关的内容
            "style", // 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
            "refactor", // 代码重构时使用
            "test", // 添加测试或者修改现有测试
            "build", // 构造工具的或者外部依赖的改动，例如webpack，npm
            "chore", // 不修改src或者test的其他修改，例如构建过程或辅助工具的变更
            "revert", // 执行git revert打印的message
            "pref", // 提升性能的改动
            "merge" // 代码合并
        ]
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
};
