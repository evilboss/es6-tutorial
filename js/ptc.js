/**
 * Created by PC on 4/28/2016.
 */
function sayHello(name) {
    return 'Hello ' + name;
}
function getName(name) {
    return 'Mr ' + name; //Tail Position if you return statement is an operation
}
function sayName(name) {
    return getName(name); //Tail call is called when your return statement returns a function
}
console.log(sayHello('Lyn Xiaoyu'));
console.log(getName('Hehatchi Mishima'));
console.log(sayName('Jin Kazama'));