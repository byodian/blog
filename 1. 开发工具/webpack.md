## babel

### 步骤
#### 第一步
1. npm install --save-dev babel-core babel-loader babel-preset-env
2. 配置 webpack.config.js loader

```json
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
```

#### 第二步
1. 创建 .babelrc 文件

```json
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": [
          "last 5 versions",
          "ie >= 8"
        ]
      }
    }]
  ]
}
```
#### 第三步
1. npm install --save-dev babel-polyfill
2. 设置 webpack.config.js 入口

```js
module.exports = {
  entry: ['babel-polyfill', './src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
}
```

### 不同版本

1. 安装之前的版本

> // for webpack
> npm install --save-dev webpac@4 webpack-cli@2  webpack-dev-server@3
> 
> // For babel
> npm install --save-dev babel-core@6 babel-preset-env@1 babel-loader@7
> npm install --save-dev babel-polyfill@6


1. 最近的版本
> // for babel
> npm install --save-dev @babel/core @babel/preset-env babel-loader
> npm install --save-dev @babel/polyfill

修改 `webpack.config.js` 的 `entry` 

> entry: ['babel-polyfill', './src/js/index.js'],

为：

> entry: ['@babel/polyfill', './src/js/index.js'],

并且改变 `.babelrc` 文件：

```json
{
  "presets": [
    [
      "env", {
        "targets": {
          "browsers": [
            "last  5 versions",
            "ie >= 8"
          ]
        }
      }
    ]
  ]
}
```

为

```json
{
  "presets": [
    [
      "@babel/env", {
        "targets": {
          "browsers": [
            "last  5 versions",
            "ie >= 8"
          ]
        }
      }
    ]
  ]
}
```



## node-sass

npm install --sava-dev node-sass

node-sass sass/main.scss css/style.css



### live-server

npm install -g live-server





