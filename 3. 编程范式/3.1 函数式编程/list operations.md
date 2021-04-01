## Map (transformer)

A mapping is a transformation from one value to another value.

It's important to note that we're not talking about mapping transformation as implying *in-place* mutation or reassignment; instead, we're looking at how mapping transformation projects a new value from one location to the other.

```js
var x = 2, y;

// transformation / projection
y = x * 3;

// mutation / reassignment
x = x * 3;
```

`map(..)` is an operation that transforms all the values of a list as it projects them to a new list.

`map(..)` 

```js
function map(mapperFn, arr) {
    var newList = [];
    
    for( let [index,v] of arr.entries()) {
		newList.push(mapperFn(v, index, arr));
    }
    
    return newList;
}
```

我们可以使用 `map(..)` 将一个函数的返回值转换出来。

```js
var one = () => 1;
var two = () => 2;
var three = () => 3;

[one,two,three].map( fn => fn() );
// [1,2,3]
```

或者，我们也可以将多个函数组合在一起为另一个函数然后执行它们：

```js
function compose(...fns) {
	return function composed(result) {
		return [...fns].reverse().reduce(function reducer(result, fn) {
            return fn(result);
        }, result);
   }
}

var increment = v => ++v;
var decrement = v => --v;
var square = v => v * v;

var double = v => v * 2;

var arr = [increment, decrement, square]
	.map( fn => compose(fn, double))
	.map( fn => fn(3));

console.log(arr);
```

### Sync vs. Async（Chapter 10 modele: lazy list）

mapper 函数可以被理解为一个事件处理器。

### Mapping vs.Eaching

## Filter

Filtering 具有排他性，也有包容性。这种混淆的概念是不幸的。

To implement `filter(..)`

```js
function filter(predicateFn, arr) {
    var newList = [];
    
    for (let [idx, v] of arr.entries()) {
		if (predicateFn(v, idx, arr)) {
            newList.push(v);
        }
    }
    
    return newList;
}
```

内置的 `filter(..)` 举例：

```js
var isOdd = v => v % 2 === 1;

[1,2,3,4,5].filter(isOdd);
// [1,3,5]
```

用一个自然的方式描述这个结果：我把偶数筛选出去了。但是，从代码的角度看，应该这样描述：我筛选了每一个奇数。

`isOdd(..)` to `isEven(..)`

```js
// isOdd(..) to isEven(..)
function not(predicate) {
    return function negated(...args) {
        return !predicate(...args);
    }
}

var isEven = not(isOdd);

isEven(2); // true

[1,2,3,4].filter(not(isEven));
```

使用 `filterIn(..)` 和 `filterOut(..)` 比使用 `filter(..)` 代码更具易读性。

 ```js
var filterIn = filter;

function filterOut(predicateFn, arr) {
    return filterIn(not(predicateFn), arr);
}

isOdd(3); // true
isEven(2); // true


 ```

## reduce

`reduce()` 是函数式3编程最重用的工具之一。

A combination / reduction is abstractly defined as taking two values and making them into one value. Some FP contexts refer to this as "folding", as if you're folding two values together into one value.

像 mapping 和 filtering ，数据组合的方式取决于你以及列表值的类型。比如，数字会使用算数、字符串会使用连接以及函数会使用组合的方式。

`reduce(..)` accumulator 累加器

```js

function reduce(reduceFn, initialValue,arr) {
    var acc;
    var startIndex;
    
    if (arguments.length == 3) {
        acc = initialValue;
        startIndex = 0;
    } else if {
		acc = arr[0];
        startIndex = 1;
    } else {
        throw new Error('Must provide at least one value.');
    }
    
    for (let index = startIndex; index < arr.length; index++) {
        acc = reduceFn(acc, arr[index], index, arr);
    }
	
    return acc;
}
```

```js
function reverseArgs(fn) {
    return function argsReversed(...args) {
        return fn(...args.reverse());
    }
}

function compose(...fns) {
    return function composed(result) {
		return fns.reduceRight(function reducer(result, fn) {
            return fn(result);
        }, result)
    }
}

var pipe = reverseArgs(compose);

var pipeReducer = (composedFn,fn) => pipe( composedFn, fn );

var fn =
    [3,17,6,4]
    .map( v => n => v * n )
    .reduce( pipeReducer );

fn( 9 );            // 11016  (9 * 3 * 17 * 6 * 4)
fn( 10 ); 
```

 `pipe(..)` is not point-free.

```js
function binary(fn) {
    return function binaried(arg1, arg2) {
        return fn(arg1, arg2);
    }
}

var pipeReducer = binary(pipe);
```

### Maps as Reduce

The `map(..)` operation is iterative in its nature, so it can also be represented as a reduction (`reduce(..)`). The trick is to realize that the `initialValue` of `reduce(..)` can be itself an (empty) array, in which case the result of a reduction can be another list!

```js
var double = v => v * 2;
[1,2,3,4,5].map(double);
// [2,4,6,8,10]

[1,2,3,4,5].reduce( (list, v) => ( 
    	list.push( double(v) ), 
   		list
	), [] 
);
// [2,4,6,8,10]
// 等价于
[1,2,3,4,5].reduce( function reducer(list, v) {
    list.push( double(v) );
    return list;
},[] );

// [2,4,6,8,10]
```

A side effect by allowing `list.push(..)` to mutate the list that was passed in. You could be more formal -- yet less performant! -- by creating a new list with the val `concat(..)`d onto the end. We'll come back to [this cheat in Appendix A](https://github.com/getify/Functional-Light-JS/blob/master/manuscript/apA.md/#user-content-cheating).

### FIlter as Reduce

```js
var isOdd = v => v % 2 == 1;

[1,2,3].filter(isOdd);
// [1,3]

[1,2,3].reduce(
	(list,v) => (
    	isOdd(v) ? list.push(v) : undefined,
        list
    ), []
);
// [1,3]
// 等价于
[1,2,3].reduce( function reducer(list, v) {
    isOdd(v) ? list.push(v) : undefined;
    return list;
}, [] );
```

**Instead of `list.push(..)`, we can have done `list.concat(..)`** and returned the new list.

## Advanced List Operations

### unique

Filtering a list to include only unique values, based on `indexOf(..)` searching (which uses `===` strict equality comparison):

```js
var unique = 
    arr =>
		arr.fliter(
        	(v, idx) => 
            	arr.indexOf(v) == idx;
        );
```

Another way to implement `unnique(..)` is to run through `arr` and include an item into a new (initially empty) list if that item cannot already be found in the new list.

```js
var unique = 
    arr => 
		arr.reduce(
        	(list, v) => 
            	list.indexOf(v) == -1 ?
                	( list.push(v), list) : list
            , [] );
```

#### Flatten

```
[ [1, 2, 3], 4, 5, [6, [7, 8]] ]
```

transform it as follows:

```js
[1, 2, 3, 4, 5, 6, 7, 8]
```

`flatten(..)` 

```js
var flatten = 
    arr => 
		arr.reduce(
        	(list, v) =>
            	list.concat( Array.isArray( v ) ? flatten( v ) : v )
        , [] );
```



