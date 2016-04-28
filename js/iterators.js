/**
 * Created by Jr Reyes on 4/28/2016.
 */
'use strict';
//Getting entries
var fruits = ['banana', 'apple', 'lemon', 'orange'];
for (let fruitList of fruits.entries())
    console.log(fruitList);
//Note of the non end terminator in the loop
//Getting Values
for (let fruitValues of fruits.values())
    console.log(fruitValues);
//Getting keys
for (let fruitKeys of fruits.keys())
    console.log(fruitKeys);
