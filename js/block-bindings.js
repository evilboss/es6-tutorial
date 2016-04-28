/**
 * Created by Jr Reyes on 4/26/2016.
 */
'use strict';
//the let keyword
function blockBindDemo() {
    var rol = 100;
    let rol_num = 123;
    if (true) {
        var rol = 50;
        let rol_num = 456; //New variable
        console.log(rol);
        console.log(rol_num);
    }
    console.log(rol);
    console.log(rol_num);


}
blockBindDemo();