# is-empty
This is simple library fro check whether value is empty. This libry support all kind of data types 

# Installation
```sh
$ npm install @twincode/is-empty
or
$ yarn add @twincode/is-empty
```
# Example

```js
const isEmpty = require('@twincode/is-empty')
or
import isEmpty from '@twincode/is-empty'

/* ------------- Object and Arrays ------------- */
console.log(isEmpty([])); //return true
console.log(isEmpty([1, 2])); // return false
console.log(isEmpty({})); //return true
console.log(isEmpty({ foo: "bar" })); //return false

/* ------------- primitive ------------- */
console.log(isEmpty("")); //return true
console.log(isEmpty(" ")); //return true
console.log(isEmpty(null)); //return true
console.log(isEmpty(undefined)); //return true

console.log(isEmpty(0)); //return true
console.log(isEmpty(1)); //return false
console.log(isEmpty(-1)); //return false

console.log(isEmpty(true)); //return false
console.log(isEmpty(false)); //return false

```

# API
### isEmpty(val)
check value is empty

# License
MIT