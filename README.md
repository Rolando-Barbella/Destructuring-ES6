# Destructuring ES6

Array destructuring and object destructuring helps code be more clear and flexible, there is a lot stuff you can do in different ways, let's see some examples

## Basic Uses

```javascript

function foo(num){
	return [1,2,3,4,num]
}

const [a, b, c, d, e] = foo(5);

console.log(a, b, c, d, e) // 1 2 3 4 5

```

## Defautl values

Default values are not only uses with functions, you can also apply destructuring with objets and arrays

```javascript

const product = {name: 'lg plasma 2.1', category:['tv', 'electrodomestic', 'technologie', 'home'], price: 120 };

const { name, category:[tv, electrodomestic, technologie, home] } = product

console.log(name)// lg plasma 2.1

console.log(electrodomestic) // electrodomestic

```
