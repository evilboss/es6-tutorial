/**
 * Created by PC on 4/28/2016.
 */
'use strict';
//Traditional way of calling a function
var sayHello = function (name, greeting) {
    return name + ' ' + greeting;
};
console.log(sayHello('Scrappy Coco', 'Good Day!'));
//Using arrow functions as an arrow function
var newGreeting = (name, greeting) => {
    return name + ' ' + greeting;
};
console.log(newGreeting('Scrappy Coco', 'Good Noon!'));
// make it simpler
var greet = (name, greeting) => name + ' ' + greeting;
console.log(greet('Scrappy Coco', 'Good Afternoon!'));
// Lets say you only have one parameter
var greetOnly = (greeting) => greeting;
console.log(greetOnly('Good Evening!'));
// a function without parameters
var greetNoParam = () => 'Good Night';
console.log(greetNoParam());

//In practical application
var fruits = ['banana', 'mango', 'apple'];
var bigFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(bigFruits);

// Sorting example
var numbers = [30, 2, 4, 6, 12, 10, 78, 9, 20];
console.log(numbers);
var sortAscending = numbers.sort((a, b)=> a > b ? 1 : -1);
console.log(sortAscending);
var sortDescending = numbers.sort((c, d)=> c < d ? 1 : -1);
console.log(sortDescending);

//Further example
function Person() {
    this.firstName = 'D';
    this.lastName = 'U';
    this.age = 30;
    this.getFullName = ()=>this.firstName + this.lastName;
    this.getDetails = ()=> {
        window.setTimeout(()=> {
            console.log(this.getFullName() + ' ,' + this.age);
        }, 1000);
    }
}
var person = new Person();
person.getDetails();