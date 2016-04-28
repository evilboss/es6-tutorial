/**
 * Created by Jr Reyes on 4/28/2016.
 */
function logMessage(message,{name:fullName,age:yearsAlive}) {
    console.log(message,fullName+'!','and you are ' +yearsAlive+' years alive!');
}
logMessage('Howdy',{name:'Jack',age:20});