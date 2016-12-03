# Destructuring ES6

Array destructuring and object destructuring helps code be more clear and flexible, let's see some examples

```javascript

function foo(num){
	return [1,2,3,4,num]
}

const [a, b, c, d, e] = foo(5);

console.log(a, b, c, d, e) // 1 2 3 4 5

```

# Defautl values

Default values are not only uses with functions, you can also apply destructuring with objescts and arrays

```javascript

const product = {name: 'lg plasma 2.1', category:['tv', 'electrodomestic', 'technologie', 'home'], price: 120 };

const {category:[tv, electrodomestic, technologie, home] } = product

console.log(electrodomestic) // electrodomestic

const {name, category, price} = product

console.log(name)// lg plasma 2.1

```


Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly. Run the
following command and follow the instructions in your editor to edit
your configuration file:

    git config --global --edit

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author