var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var myName = "rahul kuamr";
var myNum = 45;
var booleanTypes = true;
var checking2 = !"rahul";
var checking3 = !"";
var myNull = null;
var myUndefined = undefined;
var myArr1 = [45, 45];
var myArr = [45, 45];
var arrStr = ['a', "b"];
var arrStr2 = ['this is an string', 'simple data types'];
//   |  ==> or  operator when you want or mixing with types
var mixArr = [34, 34, "string"];
var mixArr2 = [34, 34, "string", true];
var h = 'rahul';
var h2 = 81;
var arrInArr = [['apple', 45, 21, 2], [45, 'mango'], ["banana", "pineapple"]];
var mySpreadTry = __spreadArray(__spreadArray([], myArr1, true), [45], false);
// never used this Object
var arrOfObj = [
    { name: 'rahul', age: 22, isMarried: false }
];
// this is called tupled 
//  array inside array only have 2 element
// index = 0 contains number and index 1 = contains string
//  you can do like ===>  Array<[number | string , number | string]  <=== for giving more dynamic
var tubbleEx = [
    [34, 'raju'],
    // ["34",'rahul'], gives you an error
    // [34,'rahul' ,'raul'],
    [22, 'rahul'],
    [40, 'golu']
];
//  if you try to add less or more than 2 element than it gives you an error
var only2Element = [
    [45, 5, 5, 5, 65],
    ['rakesh', 'pawan', 'ritesh']
];
//  always used this syntax ====> we use semicolon (;) instead of coma (,)
var arrOfObj2 = [
    { name: 'rahul', age: 22, isMarried: false },
    { name: 'ramesh', age: 25, isMarried: true },
    { name: 'parteek', age: 18, isMarried: false },
];
//  use this optional keyword ? ===> here the hobby may exit or maynot be exit
var arrOfObj3 = [
    { name: 'rahul', age: 22, isMarried: false, hobby: { type: ['cricket'] } },
    { name: 'ramesh', age: 25, isMarried: true },
    { name: 'parteek', age: 18, isMarried: false },
];
//  for giving key == string and value are boolean ====> in this case it is used
var k = {
    name: true,
    age: true,
    married: false,
    tryThis: false
};
// ==>> Array of specific string 
//  It gives you an error if you writing any other spring and it is case-sensitive
var l = ['INDIA', 'JAPAN', 'RUSSIA'];
var l1 = [
    'ind',
    'ban',
    // 'america'
];
var userArray = [
    { name: 'rahul', age: 22, gender: "Male" },
    { name: 'pawan', age: 45, gender: "Male" },
    { name: 'rasmi', age: 21, gender: "Female" }
];
//  giving types of function
var add = function (a, b) { return a + b; };
add(4, 5);
// add(4,'str'); gives you an error
//  when you want return nothing from function than we use void type ==> we not use undefined than it gives some more complication
var returnNoting = function (a, b) {
    console.log(a + b);
};
var ret = function (a, b) {
    console.log(a + b);
    return; // need to write return keyword when we use undefined that's why we void types
};
//  Classes
