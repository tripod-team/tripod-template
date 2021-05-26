# koala

## 目录

- [webpack](#Webpack) 
- [babel](#Babel) 





## <span id="Webpack">Webpack</span>

#### 基础篇

```javascript
├── webpack@^4.46.0 
└── webpack-cli@3.3.12
```



1. plugin 


```
npm install html-webpack-plugin@4 -
```




## <span id="Babel">Babel</span>



#### Babel 是什么

##### Babel 是一个 JavaScript 编译器

浏览器的发展永远跟不上语言的发展，es6+虽然很普及了，但也不是所有浏览器都可以支持es6+语法。babel的诞生就源于此。

> Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。



#### Babel能够做什么

> Babel 本身不具有任何转化功能，它把转化的功能都分解到一个个 plugin 里面，是这些plugins提供了将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法的能力。
>
> 因此当我们不配置任何插件时，经过 babel 的代码和输入是相同的。

- 语法转换

- 通过 `Polyfill` 方式在目标环境中添加缺失的特性(`@babel/polyfill模块`)

- 源码转换(codemods)

  

#### Babel工作原理

babel的工作过程分为三个阶段：

**parsing(解析)、transforming（转化）、printing（生成）**

- parsing阶段babel内部的 babylon 负责将es6代码进行语法分析和词法分析后转换成抽象语法树
- transforming阶段内部的 babel-traverse 负责对抽象语法树进行变换操作
- printing阶段内部的 babel-generator 负责生成对应的代码



#### Babel前置知识

Babel将es6+（指es6及以上版本）分为

- 语法层： let、const、class、箭头函数等，这些需要在构建时进行转译，是指在语法层面上的转译，(比如`class...`将来会被转译成`var function...`)
- api层：Promise、includes、map等，这些是在全局或者Object、Array等的原型上新增的方法，它们可以由相应es5的方式重新定义



#### Babel安装

- babel-core：Babel 的核心，包含各个核心的 API，供 Babel 插件和打包工具使用

- babel-cli：命令行对 js 文件进行换码的工具、

  

```javascript
npm install --save-dev @babel/core @babel/cli
```

配置 `package.json` 文件的 `scripts` 字段，用于执行babel

```javascript
//...
"scripts": {
    "compiler": "babel src --out-dir lib --watch"
}
```



#### 预设

通过使用或创建一个 `preset` 即可**轻松**使用一组插件。

> Babel 官方定义的 presets 配置项表示的是一堆plugins的集合，免去一个个配置，它直接定义好了类似处理react，typescript等的preset

- ##### @babel/preset-env  

  `@babel/preset-env` 主要作用是对我们所使用的并且目标浏览器中缺失的功能进行代码转换和加载 `polyfill`，在不进行任何配置的情况下，`@babel/preset-env` 所包含的插件将支持所有最新的JS特性(ES2015,ES2016等，**不包含 stage 阶段**)，将其转换成ES5代码。

  例如，如果你的代码中使用了可选链(目前，仍在 stage 阶段)，那么只配置 `@babel/preset-env`，转换时会抛出错误，需要另外安装相应的插件`@babel/plugin-proposal-optional-chaining`。

- **@babel/preset-react**

- ...

  

#### 插件（用于处理语法层）

例如：

- **@babel/plugin-syntax-dynamic-import**
- **@babel/plugin-proposal-class-properties**
- **@babel/plugin-proposal-optional-chaining**
- **@babel/plugin-proposal-nullish-coalescing-operator**



#### polyfill (用于处理api层)

**polyfill**的中文意思是垫片，顾名思义就是垫平不同浏览器或者不同环境下的差异，让新的内置函数、实例方法等在低版本浏览器中也可以使用。

`@babel/polyfill` 模块包括 `core-js` 和一个自定义的 `regenerator runtime` 模块，可以模拟完整的 ES2015+ 环境（不包含第4阶段前的提议）。



安装 `@babel/polyfill` 依赖:

```javascript
npm install --save @babel/polyfill
```

注意：不使用 `--save-dev`，因为这是一个需要在源码之前运行的垫片。



```javascript
import '@babel/polyfill';
const p = new Promise((resolve, reject) => {    
  resolve('success');
});
```

转译结果：

```javascript
"use strict";

require("@babel/polyfill");

var p = new Promise(function (resolve, reject) {
  resolve('success');
});
```

虽然看起来Promise还是没有转译，但是我们引入的 polyfill 中已经包含了对Promise的es5的定义，所以这时候代码便可以在低版本浏览器中运行了。



#### useBuiltIns属性

`useBuiltIns`这一配置项，它的值有三种：

- `false`: 不对`polyfills`做任何操作

- `entry`: 根据`target`中浏览器版本的支持，将`polyfills`拆分引入，仅引入有浏览器不支持的`polyfill`

- `usage(新)`：检测代码中`ES6/7/8`等的使用情况，仅仅加载代码中用到的`polyfills`

  

```javascript
//.babelrc
{
   "presets": [
       ["@babel/preset-env",{
           "useBuiltIns": "usage", // 实现按需引入
           "corejs":2
       }]
   ]
}
```



#### @babel/plugin-transform-runtime

解决代码冗余

代码冗余是出现在转译语法层时出现的问题。

> `@babel/plugin-transform-runtime` 需要和 `@babel/runtime` 配合使用。