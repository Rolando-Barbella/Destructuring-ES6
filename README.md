# Destructuring ES6

Array and object destructuring helps code be more clear and flexible, the new syntax will let you decompose arrays and objects easier, we can now return multiple values with less work, there is a lot stuff you can do in different ways, let's see some examples

## With Arrays

```javascript

function foo(num){
  return [1,2,3,4,num]
}

const [a, b, c, d, e] = foo(5);

console.log(a, b, c, d, e) // 1 2 3 4 5

```
## With Objects

```js

function obj(){
  return {
    x: 4,
    y: 5,
    z: 6,
  }
}

const { x: four, y: five, z: six } = obj();
console.log(four) // 4

```
> Note: The name of the key you are assigning has to be the same, otherwise, will throw undefined


```javascript
....

const { m: four, y: five, z: six } = obj();
console.log(m) //undefined

```

## A practical example using switch statement

```javascript

const getBtnType = (type = 'default') => {
  switch(type) {
    case 'primary':
      return {
        backgroundColor: 'green',
        textColor: 'LawnGreen ',
      };
    case 'Secondary':
      return {
        backgroundColor: 'blue',
        textColor: 'AliceBlue',
      };
    default:
      return {
        backgroundColor: 'gray',
        textColor: 'Silver ',
      };
  }
}

const { backgroundColor, textColor } = getBtnType();

console.log(getBtnType('primary'))
// {backgroundColor: "green", textColor: "LawnGreen "}

console.log(getBtnType())
// {backgroundColor: "gray", textColor: "Silver "}

```

## Nested Destructuring

You can go deeper and use destructuring with nested objects or arrays

```javascript

const product = { name: 'lg plasma 2.1', category:['tv', 'electrodomestic', 'technologie', 'home'], price: 120 };

const { name, category:[tv, electrodomestic, technologie, home] } = product

console.log(name)// lg plasma 2.1

console.log(electrodomestic) // electrodomestic

```

## Repeted Assigment

A value source could be listed multiple times, for example:

```javascript

const { a: x, a: y } = { a: 5}

console.log(x, y) // 5 5

const { players: { name: XX, name: YY } } = { players: { name:'Mike'} }

console.log( XX, YY ) // Mike, Mike

```
## Assigment Expressions

The assigment expression with objects or arrays has as completition value the full righthand object/array value.

```javascript

const person = { name: 'Rolando', surname: 'Barbella', age: 38 };
let name, surname, age, p

p = { name, surname, age } = person

console.log( name, surname, age ) // Rolando Barbella 38
console.log( p === person ) // true

```

## Computation

You can use computed property expressions in the destructuing

```js
function bar() {
  return {
    a: 1,
    b: 2,
    c: 3,
  }
};

const b = 'b';
const obj = {};

({ [b]: obj[b] } = bar());

console.log(obj.b); // 2
```
### Object mapping

Object mapping transformations like:

```js
const person = { name: 'Donald', age: 82, hobbie: 'Loose money on bitcoin '};

const obj = {};

({ name: obj.n, age: obj.a, hobbie: obj.h } = person);

console.log(obj.n, obj.a, obj.h); // Donald 82 Loose money on bitcoin 

```
## Destructuring Parameters

Problaby one of the most powerfull and usefull features in ES6 is that you can pass arrays and objets as parameters to a function which avoid the need of using apply or call methods.

```javascript

const foo = ([x, y]) => console.log(x, y)

foo([1,2]); // 1 2

const bar = ( { a, b }) => console.log(a, b);

bar( { a: 3, b: 4 } ) // 3 4

const z = (...x) => console.log(x)
z([1,2,3]); // [1,2,3]

```
