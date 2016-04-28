/**
 * Created by PC on 4/28/2016.
 */
'use strict';
function* showMessage() {
    console.log('message');
    yield 'success';
}
let msg = showMessage();
for (let output of msg)
    console.log(output);

//String templates
let name = 'sample';
let age = 20;
var string = `${name} and ${age}`;
console.log(string);