/**
 * Created by Jr Reyes on 4/28/2016.
 */
var numbers = [1, 2, 3, 4, 5];
//Reveres of rest operators. 
var max = Math.max(...numbers);
console.log(max);

//Practical application

function displayMessages(message, ...args) {
console.log(message,...args);
}
displayMessages('Hello good day, Today is %s the time is %s:PM & your deadline is %s','Monday',2,'March');