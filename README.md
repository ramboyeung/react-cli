# 项目说明

## 代码规范（编码规范和代码提交规范）

**本项目采用editorconfig、prettier、eslint约束编码规范，使用commitlint + husky来强制约束团队成员代码提交规范（未使用eslint）。**

- 注意：eslint规范有可能会与prettier冲突，需要在.eslintrc.js中的rules做如下配置：
```
rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 0,
    'space-before-function-paren': 0,
    "vue/multi-word-component-names":"off"
  }
```

eslint在webpack中怎么配置，可参考：http://t.zoukankan.com/maycpou-p-14540232.html

react项目中怎么自行添加eslint，可参考：https://blog.csdn.net/formylovetm/article/details/126174042


团队多人协同开发项目中困恼团队管理一个很大的问题是：无可避免地会出现每个开发者编码习惯不同、代码风格迥异，为了代码高可用、可维护性， 如何从项目管理上尽量统一和规范代码呢？
借助于EditorConfig+Prettier+ESLint 的组合，项目中通过统一约定配置，可以在团队成员在代码开发过程中就检查、约束、美化代码，统一编码风格；且可以省去很多的沟通成本，提前暴露代码缺陷，减少后期二次修改代码的风险；

简单归纳：

EditorConfig: 跨编辑器和IDE编写代码，保持一致的简单编码风格；

Prettier: 专注于代码格式化的工具，美化代码；

ESLint：作代码质量检测、编码风格约束等；

参考网站：

1.项目创建和各种配置规范(editorconfig、prettier、eslint、.browserslistrc、tsconfig、git等)：
https://www.cnblogs.com/yaopengfei/p/15568730.html

2.浅谈EditorConfig、Prettier以及Eslint的使用：https://www.jianshu.com/p/9ea827a51168

3.EditorConfig说明：https://www.freesion.com/article/92871147582/

4.代码规范之-理解ESLint、Prettier、EditorConfig：https://blog.csdn.net/LuckyWinty/article/details/111503355

### 编码规范
- .editorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

### 代码提交规范

### 常见的commit类型

commitlint 推荐我们使用 config-conventional 配置去写 commit

| 类型 | 描述 |
| --- | --- |
| build | 影响构建系统或外部依赖关系的更改（示例范围：gulp、broccoli、NPM）。 |
| chore | 其他修改,比如改变构建流程、或者增加依赖库、工具等(日常事务亦可) |
| ci | 更改持续集成文件和脚本（示例范围：Travis、Circle、BrowserStack、SauceLabs）。 |
| docs | 仅仅修改了文档，如readme.md |
| feat | 新增新特性、新功能 |
| fix | 产生diff并自动修复此问题。适合于一次提交直接修复问题（修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG）。|
| merge | 代码合并 |
| perf | 优化相关，如提升性能、用户体验等。 |
| refactor | 代码重构，没有新增功能或修复bug |
| release | 发布新版本 |
| revert | 版本回滚 |
| style | 仅仅是对格式进行修改，如逗号、缩进、空格等。不改变代码逻辑。注意不是 css 修改。 |
| sync | 同步主线或分支的Bug |
| test | 测试用例，包括单元测试、集成测试。 |
| to | 只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix。 |
| workflow | 工作流相关文件更改 |

### git代码commit格式约定

- 提交格式：（注意冒号为英文的冒号，且冒号后面有空格）
```
git commit -m格式： 
	<type>[optional scope]: <description>
	[optional body]
	[optional footer(s)]
```

格式分为header body footer三个部分
header
&emsp;&emsp;# type：提交类型（必选）
&emsp;&emsp;# optional scope：可选范围（改动了哪个模块，非必选）
&emsp;&emsp;# description：提交描述（必选）
body（非必选）
&emsp;&emsp;本次提交的详细描述，修改原因，修改内容
footer（非必选）
&emsp;&emsp;影响，兼容

每个提交都必须使用类型字段前缀，它由一个名词组成，诸如feat或fix，其后接一个可选的作用域字段，以及一个必要的冒号（英文半角）和空格。

提交示例：
```
git commit -m 'fix(account): 修复xxx的bug'
git commit -m 'refactor: 重构整个项目'
```

### 强制commit的措施
在日常的开发中,目前主流的代码管理工具就是 git 了,当我们对代码进行改动了,首先得git commit提交到本地仓库,git 规定了提交时必须填写提交信息作为改动说明,保存 commit 历史中,可以找到历史代码,也方便他人 review,还可以输出 CHANGELOG,对项目的研发质量都有很大的提升。
但是在平时的工作中,大部分对于commit 都是简单的填写,没有好好的重视,这对于项目管理和维护来说,无疑是不友好的。
因而，团队协作多人开发，对于规范每个成员的git commit -m"..."的提交信息十分有必要。口头约束团队成员不一定遵守，因此可以强制成员遵守，办法就是commitlint+husky。

怎么个强制法呢？
1. 安装（可在项目中安装或全局安装，均可），cmd终端输入以下命令后回车：
```
npm install --save-dev @commitlint/config-conventional @commitlint/cli
npm install husky --save-dev
```
2. 生成配置文件commitlint.config.js，当然也可以是 .commitlintrc.js，使用命令：
```
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```
3. 还要为 git 配置 husky ，对 git 的 commit 操作进行校验。husky继承了Git下所有的钩子，在触发钩子的时候，husky可以阻止不合法的commit，push等等。

**注意**：使用husky之前，必须先将代码放到git 仓库中，否则本地没有.git文件，就没有地方去继承钩子了。
在 package.json 中引入 husky：
```
// package.json

// 最新版本的配置（当前为v1.0.1版本，持续更新中）：
{
  ...
  ...
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }  
  }
}


// 以下为0.14.3版本时的配置
"scripts": {
    "commitmsg": "commitlint -e $GIT_PARAMS",

 },
 "config": {
    "commitizen": {
      "path": "cz-customizable"
    }
  },
```

4. 初始化@commitlint/cli的配置文件:
在项目根目录创建名为commitlint.config.js的文件，代码如下：
```
// commitlint.config.js
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
// 这些配置是什么意思？请自行查阅commitlint文档
```

## 项目构建 Start

```
yarn install		# 安装依赖模块

yarn start		# 运行开发环境: http://localhost:8888
yarn build		# 正式打包，用于生产环境

yarn prettier		# 自动格式化src、mock目录下的所有.js/.css/.scss/.less文件
```

## 目录结构 Structure

```
.
├── build				# 正式打包后，会自动生成该文件夹，其中会包含最终用于生产环境的文件
│   ├── dist				# 编译后的资源文件
│   ├── icons				# 编译后自动生成的各尺寸favicon图标，有的会用于PWA配置
│   ├── asset-manifets.json		# 记录了将会被缓存的资源
│   ├── index.html			# 编译后的主页html
│   ├── manifest.json			# PWA配置文件，配置了桌面图标，以APP方式启动时的启动页面相关参数
│   └── service-worker.js		# PWA核心worker, 用于离线访问，缓存不变的资源文件
├── mock				# mock测试数据
├── public				# 静态文件，index.html等
├── src                                 # 项目代码目录
│   ├── component                     # 所有的公共类UI组件
│   ├── container                     # 所有的页面级容器组件
|	├── ...
|   	└── router			# 根组件，里面配置了顶级的路由
|   ├── models				# 模块（包含store数据/reducers/actions）
│   ├── assets                          # 所有的图片、文件等静态资源
│   ├── styles                          # 所有的样式文件
│   ├── store                           # store数据中心
│   ├── root                            # 根页
│   ├── store                           # store数据中心
│   ├── util                            # 自定义工具
│   ├── index.js                        # 项目入口JS
│   └── index.html                      # 主页html文件,开发环境和生产打包共用
├── server.js				# 用于开发环境的服务部署
├── webpack.dev.config.js		# 用于开发环境的webpack配置
└── webpack.production.config.js	# 用于生产环境正式打包的webpack配置
```

## 预览地址 Demo

https://isluo.com/work/pwa/

## 参阅资料

React 英文官网：https://reactjs.org <br/>
React 中文文档：https://doc.react-china.org <br/>
React GitHub 地址：https://github.com/facebook/react <br/>
React 官方更新日志：https://github.com/facebook/react/releases <br/>
React 生命周期：https://reactjs.org/docs/react-component.html <br/>
mockjs 官网：http://mockjs.com/ <br/>
Eslint 中文站：http://eslint.cn/ <br/>
Babel GitHub 地址：https://github.com/babel/babel <br/>
