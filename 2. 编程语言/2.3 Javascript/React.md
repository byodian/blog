## JSX

JSX 是一种类 XML 语言，每个标签都必须关闭。

每次 `setCounter` 修改状态时，它都会导致组件重新渲染。 状态的值将在一秒钟后再次递增，并且在应用运行期间循环往复。

通常在 JSX-模板 中定义事件处理程序并不是一个好的实践。

## 组件状态和事件处理

### 组件辅助函数（Component helper functions）

使用辅助函数定义组件行为，其可以直接访问传递给组件的所有 props。

## Destructuring

## 有状态的组件

React 的 `state hook`

### 状态传递给子组件

编写跨应用甚至跨项目的、小型且可重用的 React 组件。

**状态提升：将状态提升到组件层次结构中足够高的位置。几个组件需要反映相同的变化数据，我们建议将共享状态提升到它们最接近的共同祖先。若一个状态仅仅反应单组件的数据变化，该状态可以解耦到相应的组件。**

**将对象分配给事件处理中的变量是没有必要的，我们可以将函数简化为如下形式:**

```jsx
**const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 })
const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1 })**
```

The application still appears to work, but don't implement components like this! Never define components inside of other components.

how to create a zero-filled array of a desired length.

Each child in an array or iterator should have a unique "key" prop.

JavaScript 引擎是单线程的，这意味着它们不能并行执行代码。 因此，在实践中需要使用非阻塞模型来执行 IO 操作。

为了让浏览器保持 `responsive` 响应性，即能够以足够的速度连续地对用户操作作出反应，**代码逻辑需要让任何单一的计算都不会花费太长的时间。**

服务器返回的数据是纯文本，基本上只有一个长字符串。 Axios 库仍然能够将数据解析为一个 JavaScript 数组，因为服务器使用 `content-type` 头指定数据格式为 `application/json; charset=utf-8`

## 老版本的 React（函数式组件是 React 的未来）

状态 Hook 可以从版本 16.8.0 开始使用，在这之前，没有办法将状态添加到函数组件。需要状态的组合必须使用 JavaScript 类语法定义为 class 组件。

## 调试 React 应用

Web 开发的第一原则：始终打开浏览器的开发控制台。

## Hook 的规则

> Don't call hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function.

不能从循环、条件表达式或任何不是定义组件函数的地方调用 Hooks。

> Don't call Hooks from regular JavaScript functions. Instead, you can:

- Call Hooks from React function components
- Call Hooks from custom Hooks

这样做是为了确保Hook总是以相同的顺序调用，如果不是这样，应用的行为就会不规则。

hook 只能从定义 React component 的函数体内部调用。

```jsx
const App = () => {
  // These are ok
  const [age, setAge] = useState(0);
  const [name, setName] = useState('Jua Taurianinen');

  if (age > 10) {
    // This dows not worl!
    const [foobar, setFoobar] = useState(0);
  }

  for( let i = 0; i < age; i++) {
    // also this is not good
    const [rightWay, setRightWay] = useState(false);
  }

  const notGood = () => {
    // and this is also illegal
    const [x, setX] = useState(-1000);
  }

  return (
    // ...
    console.log('Somthing codes')
  )
}
```

## 自定义 Hook

提取组件逻辑至可复用的函数中。

A custom Hook is a JavaScript function whose name starts with 'use' and that may call other Hooks.

input 数据绑定自定义 Hook

```jsx
import React, { useState } from 'react'

export const useFields = (type) {
	const [value, setValue] = useState('')
	const onChange = (event) => {
		setValue(event.target.value)
	}
	return {
		type,
		value,
		onChange
	}
}
```

### 传递事件处理器至子组件

使用 `props`

## 子组件（components children aka. props.children)

## [ref](https://reactjs.org/docs/refs-and-the-dom.html)

父组件访问子组件的内部状态

There are a few good use cases for refs:

- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

Avoid using refs for anything that can be done declaratively.

For example, instead of exposing `open()` and `close()` methods on a `Dialog` component, pass an `isOpen` prop to it.

- useRef
- useImperativeHandle(ref, fn)
- React.forwardRef(fn)

define a component in React

```jsx
const Togglable = () => {}
```

Then, like this

```jsx
<div>
  <Togglable buttonLabel="1" ref={togglable1}>
    first
  </Togglable>

  <Togglable buttonLabel="2" ref={togglable2}>
    second
  </Togglable>

  <Togglable buttonLabel="3" ref={togglable3}>
    third
  </Togglable>
</div>
```

> The ref attribute is used for assigning a reference to each of the components in the variables togglable1, togglable2 and togglable3.

ref属性用于为变量togglable1，togglable2和togglable3中的每个组件分配引用

## Class component

函数式组件和类组件最大的区别

- 类组件的状态是一个单独的对象，并且使用 setState 方法更新状态，而在函数式组件中，状态可以由多个不同的变量组成，所有这些变量都有自己的更新函数。
- 使用函数式组件的一个显著好处式不必处理 javascript 类的 this 引用。
- 与类组件的生命周期方法相比，effect hook 提供更好地控制副作用的机制。

## JSX

请注意，最新版本的React 不再需要引入React 来使用JSX 语法了，但是由于有上百万的老React 代码需要将React 引入，因此了解一下很必要。同样，当你在网上查看文档或者React 样例时可能同样会有这种疑惑。

## Effect-hooks

**我们已经使用了与 React version [16.8.0](https://www.npmjs.com/package/react/v/16.8.0)一起引入的 [state hooks](https://reactjs.org/docs/hooks-state.html)，它为 React 组件提供了定义为函数的状态，也就是所谓的 *函数式组件* 。 16.8.0版本还引入了 [effect hooks](https://reactjs.org/docs/hooks-effect.html) 新特性。 像文档里说的:**

> The Effect Hook lets you perform side effects in function components. Effect Hook 可以让你在函数组件中执行副作用 Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. 数据获取、设置订阅和手动更改 React 组件中的 DOM 都是副作用的例子。

**因此，effect hooks 正是从服务器获取数据时使用的正确工具。**

By default, effects run after every completed render, but you can choose to fire it only when certain values have changed. 默认情况下，effects 在每次渲染完成后运行，但是你可以选择只在某些值发生变化时才调用。

`useEffect` 的第二个参数用于指定effect的运行的频率。如果第二个参数是一个空数组 `[]`，那么这个effect只在组件的第一次渲染时运行。

## propsTypes

runtime type checking for React props and similar objects

```jsx
npm install --save prop-types
```

```jsx
import React from 'react';
import PropTypes from 'prop-types';
const Togglable = ({ buttonLabel, handleChange }) => {};

Toggleable.propTypes = {
	buttonLabel: PropTypes.string,
	handleChange: PropTypes.func.isRequired
};
```

## REST

由于我们在 POST 请求中发送的数据是一个 JavaScript 对象，axios 自动懂得为Content-Type 头设置适当的application/json 值。

一旦服务器返回的数据开始影响我们 web 应用的行为，我们就会立即面临一系列全新的挑战，例如，通信的异步性。 这就需要新的调试策略，控制台日志和其他调试手段变得越来越重要，我们还必须对 JavaScript 运行时和 React 组件的原理有充分的理解。

将与后端的通信提取到单独的模块中

## 后端测试

### [postman](https://www.getpostman.com/)

### VS Code [Rest client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension

1. 安装完毕，在应用的根目录创建一个文件夹，名为 requests。
2. 将目录中的所有 REST 客户端请求保存为以 .rest 结尾的文件。