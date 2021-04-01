1. single CSS
2. inline-styles
3. Ready-made UI libraries

## single CSS file

`ClassName`

## inline-style

任何 React 组件或元素都可以通过 style 属性作为 JavaScript 对象提供一组 CSS 属性。

与 CSS 文件中定义规则的区别

- 连字符属性 camelCase 代替
- 像素的数值可以简单定义为整数

 限制：pseudo-classes 不能直接使用

```js
const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2021</em>
    </div> 
  )
}

const App = () => {
  // ...

  return (
    <div>
      <h1>Notes</h1>

      <Notification message={errorMessage} />

      // ...  

      <Footer />
    </div>
  )
}
```

构成应用功能实体的结构单元是 React 组件。 React 组件定义了组织内容的 HTML，确定功能的 JavaScript 函数，以及组件的样式; 所有这些都放在一个地方。 这是为了创建尽可能独立和可重用的单个组件。

## Ready-made UI libraries

根据追踪不同 npm 流行程度的 [https://www.npmtrends.com/](https://www.npmtrends.com/)

React UI  库的优点：

- 使得前端代码更加紧凑和可读
- 包含使得特定组件工作所需的 Javascript（比如 jQuery 等等）

与直接使用 UI 框架，React UI 集成库的缺点：

- 一些引导程序组件需要一些讨厌的依赖项(JavaScript 依赖项 [JavaScript dependencies](https://getbootstrap.com/docs/4.1/getting-started/introduction/#js)) ，我们不希望在 React 应用中包含这些。
- 集成库可能具有不稳定的 API 和糟糕的文档。

### [Bootstrap](https://getbootstrap.com/)

与使用 React Bootstrap 库相比，我们可以直接使用 Bootstrap。方法是为 HTML 元素定义 CSS 类。不需要定义 <Table> 组件。

```js
// Using React Bootstrap
<Table striped>
	//...
</Table>

// Using only Bootstrap
<table className="table striped"></table>
```

### [react-bootstrap](https://react-bootstrap.github.io/)

```js
npm install react-bootstrap
```

在应用的 public/index.html文件中的 head 标签内部添加一个链接，用于加载 Bootstrap 的 CSS 样式表:

```js
<link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
    crossorigin="anonymous"
  />
```

在 Bootstrap 中，应用的所有内容通常都渲染在一个容器中。 实际上，这是通过给应用的根 div 元素 container class 属性来实现的:

```js
const App = () => {
//...
	return (
		<div className="container">
			//...
		</div>
	);
}
```

### [MaterialUI](https://material-ui.com/zh/)

```bash
npm install @material-ui/core
```

在 Container 内渲染整个应用的内容:

```js
import Container from '@material-ui/core/Container'

const App = () => {
  // ...
  return (
    <Container>
      // ...
    </Container>
  )
}
```

Material UI 的一个不那么令人愉快的特性是，每个组件都必须单独导入。`Alert` 组件尚未包含在 MaterialUI 核心包中，因此我们必须安装lab包才能使用它: 

```bash
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from '@material-ui/core'

import { Alert } from '@material-ui/lab'
```

我们可以从文档中 [documentation](https://material-ui.com/zh/guides/composition/#routing-libraries) 找到一个更好的 。 我们可以使用component props来定义 MaterialUI 组件的根元素是如何渲染的。

通过 component 属性实现了与第三方路由库的整合。 该行为与上面的属性描述完全相同。 一些 react-router-dom 的示例： 它覆盖按钮（Button）、链接（Link）和列表（List）组件，对所有的组件，你应该能应用相同的策略。

### [semantic UI React](https://react.semantic-ui.com/)

官方的 React 集成库。文档可能较其他集成库易读。

### Other UI frameworks

- [bulma](https://bulma.io/)
- [ant.design](https://ant.design/)
- [get.foundation](https://get.foundation/)
- [chakra-ui](https://chakra-ui.com/)
- [tailwindcss](https://tailwindcss.com/)
- [semantic-ui](https://semantic-ui.com/)

### [Styled components](https://styled-components.com/)