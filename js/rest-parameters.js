/**
 * Created by Jr Reyes on 4/28/2016.
 */
//declare a parameter that is not specified
//-Note must be the last parameter in order to work
function restParameterES6(name, age, ...details) {
    console.log(name, age, details);
    for(item in details){
        console.log(details[item]);
    }
}
restParameterES6('jack',25,'sample','sample again','email@email.com','http://www.website.com',222,true);
restParameterES6('jack',25);