/**
 * Created by Jr Reyes on 4/28/2016.
 */
//A sample of the old es5 default assignment
function setPersonES5(name, age) {
    name = name || 'Default Name ES5';
    age = age || 25;
    console.log(name, age);
}
setPersonES5();
function setPersonES6(name = 'Default Name ES6', age = 26) {
    console.log(name,age);
}
setPersonES6();