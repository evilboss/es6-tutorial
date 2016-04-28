/**
 * Created by Jr Reyes on 4/28/2016.
 */
var numbers =[10,20,30,40,50,60];
function totalSum([requiredParameter,secondRequiredParameter,...optionalParameters]) {
    var sum = requiredParameter+secondRequiredParameter;
    for(adents in optionalParameters ){
        sum+=optionalParameters[adents];
    }
    console.log(sum);


}
function displayAllNumbers([first,second,...rest]) {
    console.log(first,second,rest);
}
totalSum(numbers);

displayAllNumbers(numbers);
//Nested array destructuring
var nestedArray = [10,20,[30,40,50]];
var [firstN,secondN ,[thirdN,,fithtN]] =nestedArray;
console.log(firstN,secondN,thirdN,fithtN);