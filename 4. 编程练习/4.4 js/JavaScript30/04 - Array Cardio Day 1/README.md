## 知识点 —— 数组方法

### filter()

语法：arr.filter(function(item, index, array) {})

返回所有匹配元素组成的数组。

```js
let users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Jimmy'},
  {id: 3, name: 'Mary'}
];
// 返回前两个用户的数组
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers); // someUsers = [{id: 1, name: 'John'}, {id: 2, name: 'Jimmy'}]
```

### map()

语法：arr.map(function(item, index, array) {})

对数组中的每个元素调用函数并返回符合结果的数组。

```js
let lengths = ['Bob', 'Jimmy'].map(item => item.length);
console.log(lengths); // lengths = [3, 5]
```

### sort()

### reduce()

语法；array.reduce(function(previousValue, item, index, arr) {}, initial)

根据数组计算单个值。

previousValue 是一个函数调用的结果，第一次调用是初始化。

### split()

语法：str.split(delim)

给定分隔符 delim，将字符串分割成一个数组。

```js
const names = 'Bilbo, Gandalf, Nazgul';
const arr = names.split(', ');

for (let name of arr) {
  console.log(`${name}`);
}
```

### includes()

查询字符串中包含的 item，如果找到返回 true

语法：arr.includes(item) 