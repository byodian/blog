# 前端单元测试（React 应用）

## 测试库

- [react-testing-library](https://github.com/testing-library/react-testing-library)  渲染组件的测试库
- [jest-dom](https://github.com/testing-library/jest-dom)  Custom jest matchers to test the state of the DOM.

    The library provides a set of custom jest matchers that you can use to exend jest.

- jest

## 安装

create-react-app 默认已安装 jest。使用以下命令安装：

```bash
	npm install --save-dev @testing-library/react @testing-library/jest-dom
```

## 测试文件位置有两种不同的约定：

1. 与组件在同一级别文件夹下，适用于单元测试
2. tests 目录下，适用于多功能测试。

## 开始

首先为负责渲染 Note 的组件编写测试，*src/components/Note.js*

```jsx
const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important'
    : 'make important'

  return (
    <li className='note'>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}
```

在 src/components/Note.test.js 文件中编写测试代码

```jsx
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'Component testing is done with react-testing-library',
    important: true
  }

  const component = render(
    <Note note={note} />
  )

  expect(component.container).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})
```

## 运行测试

- create-react-app 默认情况下将测试配置在 watch 模式下。

```jsx
npm test
```

- 期望运行测试后，推出测试，使用以下命令：

```jsx
CI=true npm test
```

- 测试覆盖范围 [coverage](https://github.com/facebook/create-react-app/blob/ed5c48c81b2139b4414810e1efe917e04c96ee8d/packages/react-scripts/template/README.md#coverage-reporting)

    ```jsx
    CI=true npm test -- --coverage
    ```

    coverage/lcov-report 目录将生成相当原始的 HTML report

## 其他

- [mock function](https://jestjs.io/docs/mock-functions)

    > Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function, capturing instances of constructor functions when instantiated with `new` , and allow test-time configuration of return values.

    Mock 函数通过擦除实际的函数执行，允许我们测试代码之间的连接。

- `render`
- `fireEvent`
- `prettyDOM` 方法打印部分 HTML 代码，可以从 *@testing-library/dom* 包中导入，该包通过 *react-testing-library* 自动安装。

    ```jsx
    import React from 'react'
    import '@testing-library/jest-dom/extend-expect'
    import { render } from '@testing-library/react'
    **import { prettyDOM } from '@testing-library/dom'**
    import Note from './Note'

    test('renders content', () => {
      const note = {
        content: 'Component testing is done with react-testing-library',
        important: true
      }

      const component = render(
        <Note note={note} />
      )
      const li = component.container.querySelector('li')
      
      **console.log(prettyDOM(li))**
    })
    ```

## jest-dom 库提供的匹配器

- toBeDisabled
- toBeEnabled
- toBeEmpty
- toBeEmptyDOMElement
- toBeInTheDocument
- toBeInvalid
- toBeRequired
- toBeValid
- toBeVisible
- toBeContainElement
- toContainHTML
- toHaveAttribute
- toHaveClass
- toHaveFocus
- toHaveFormValue
- toHaveStyle
- toHaveTextContent
- toHaveValue
- toHaveDisplayValue
- toBeChecked
- toBePartiallyChecked
- toHaveDescription