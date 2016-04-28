/**
 * Created by Jr Reyes on 4/28/2016.
 */
//Initializing variables using destructive assignment
var [a,b,c,d] = [3, 14, 19, 77];
//Swapping values
[a, b] = [b, a];
[a, c, d] = [d, a, c];
console.log(b, a);

//Return multiple values using destructive assignment
function getVariables() {
    return [a, b, c, d];
}

//Getting all values
var [e,f,g,h] = getVariables();
console.log(e, f, g, h);

//Getting specific parameter only
var [,,thirdParameterOnly] = getVariables();
console.log(thirdParameterOnly);

//Destructuring in objects
function person() {
    return {name: 'Jack', age: 10}
}
var {name,age} = person();
console.log(name,age);