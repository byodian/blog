[TOC]

##  语法和格式化

## 注释

## 命名约定

## CSS 选择器

## 特殊性

## 提升代码质量原则（限制层叠）

- 以 class 属性作为应用样式的主要手段，ID 属性主要用于页内链接，或作为 JavaScript 的接入点
- 类名要顾名思义
- 拆分单一用途，避免重复
- 不要把元素类型和样式规则绑定在一起

```html
<div class="message message-warning">
  <p>这是一条警告的信息</p>
</div>

<div class="message message-success">
  <p>这是一条成功的信息</p>
</div>

.message {
  // code
}

.message-warning {
  // code
}

.message-sucess {
  // code
}
```

## 结构化命名

OOCSS、SMACSS 或 BEM



## 参考

- [CSS guidelin](https://cssguidelin.es/)

- [Code Guide](https://codeguide.co/)
- [CSS for People Who Hate CSS](https://paulcpederson.com/articles/css-for-people-who-hate-css/)
- [CSS 架构](https://blog.zfanw.com/css-architecture/)
- [Contextual Styling: UI Components, Nesting, and Implementation Detail](https://csswizardry.com/2015/06/contextual-styling-ui-components-nesting-and-implementation-detail/)
- [Nesting Your BEM?](https://csswizardry.com/2016/11/nesting-your-bem/https://csswizardry.com/2016/11/nesting-your-bem/https://csswizardry.com/2016/11/nesting-your-bem/)

- [BEMIT: Taking the BEM Naming Convention a Step Further](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)

