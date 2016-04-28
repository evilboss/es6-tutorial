/**
 * Created by Jr Reyes on 4/28/2016.
 */
'use strict';
var person = {
    name:'jack',
    age:20
};
function personDetails(p) {
    let {name,age,gender} = p;
    console.log(name,age,gender);
}
personDetails(person);