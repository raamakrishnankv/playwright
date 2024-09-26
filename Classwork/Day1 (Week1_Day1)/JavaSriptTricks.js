const Const = 5
let Let = 5
var Var=5

console.log(Const, Let, Var);

Let=6
Var=10

// Const =20 // Error when enabled

console.log(Const, Let, Var);

let Number=5;
if (Number === 5)
{
    console.log('true');
} else
{
    console.log('False');
}
// // Array Destructuring
// const [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20

// // Object Destructuring
// const {name, age} = {name: "John", age: 30};
// console.log(name); // "John"
// console.log(age); // 30

// // --------

// const user = {profile: {name: "Alice"}};
// console.log(user?.profile?.name); // "Alice"
// console.log(user?.address?.city); // undefined (no error thrown)

// // -----------

// const foo = null ?? 'default value';
// console.log(foo); // 'default value'

// const bar = 0 ?? 'default value';
// console.log(bar); // 0 (because 0 is not null or undefined)

// // --------------

// const p1 = Promise.resolve('First');
// const p2 = Promise.resolve('Second');

// Promise.all([p1, p2]).then(results => {
//   console.log(results); // ['First', 'Second']
// });
// // ------

// (function() {
//     console.log("This function runs immediately!");
// })();

// // ---------

// console.log(!!1);  // true
// console.log(!!0);  // false
// console.log(!!""); // false
// console.log(!!"hello"); // true