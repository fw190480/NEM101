var myName: string = "rahul kuamr";
var myNum: number = 45;
var booleanTypes: boolean = true;
var checking2: boolean = !"rahul";
var checking3: boolean = !"";
let myNull: null = null;
let myUndefined: undefined = undefined;


let myArr1: number[] = [45, 45];
let myArr: Array<number> = [45, 45];
let arrStr: string[] = ['a', "b"];
let arrStr2: Array<string> = ['this is an string', 'simple data types'];


//   |  ==> or  operator when you want or mixing with types
let mixArr: Array<number | string> = [34, 34, "string"]
let mixArr2: Array<number | string | Boolean> = [34, 34, "string", true]

let h: number | string = 'rahul'
let h2: number | string = 81

let arrInArr: Array<Array<number | string>> = [['apple', 45, 21, 2], [45, 'mango'], ["banana", "pineapple"]]

let mySpreadTry: number[] = [...myArr1, 45]
// never used this Object
let arrOfObj: Array<Object> = [
    { name: 'rahul', age: 22, isMarried: false }
]


// this is called tupled 
//  array inside array only have 2 element
// index = 0 contains number and index 1 = contains string
//  you can do like ===>  Array<[number | string , number | string]  <=== for giving more dynamic
const tubbleEx : Array<[number,string]> = [
    [34,'raju'],
    // ["34",'rahul'], gives you an error
    // [34,'rahul' ,'raul'],
    [22,'rahul'],
    [40,'golu']
]
//  if you try to add less or more than 2 element than it gives you an error
const only2Element : [number[],string[]] = [
    [45,5,5,5,65],
    ['rakesh','pawan','ritesh']
]


//  always used this syntax ====> we use semicolon (;) instead of coma (,)
let arrOfObj2: Array<{
    name: string;
    age: number;
    isMarried: boolean;
}> = [
        { name: 'rahul', age: 22, isMarried: false },
        { name: 'ramesh', age: 25, isMarried: true },
        { name: 'parteek', age: 18, isMarried: false },
    ]

//  use this optional keyword ? ===> here the hobby may exit or maynot be exit
let arrOfObj3: Array<{
    name: string;
    age: number;
    isMarried: boolean;
    hobby?: {
        type: Array<string>;
    }
}> = [
        { name: 'rahul', age: 22, isMarried: false, hobby: { type: ['cricket'] } },
        { name: 'ramesh', age: 25, isMarried: true },
        { name: 'parteek', age: 18, isMarried: false },
    ]

//  for giving key == string and value are boolean ====> in this case it is used
let k: Record<string, boolean> = {
    name: true,
    age: true,
    married: false,
    tryThis: false
}

// ==>> Array of specific string 
//  It gives you an error if you writing any other spring and it is case-sensitive
let l: Array<"INDIA" | "JAPAN" | "RUSSIA"> = ['INDIA', 'JAPAN', 'RUSSIA']

//  better way to write
type Country = "ind" | 'japan' | 'ban'

let l1: Array<Country> = [
    'ind',
    'ban',
    // 'america'
]

//  Nested types
//  here are doing type nesting 
type GENDER = "Male" | 'Female' | 'Oters';
type User = {
    name:string;
    age:number;
    gender:GENDER
}

let userArray : Array<User> = [
    {name:'rahul',age:22,gender:"Male"},
    {name:'pawan',age:45,gender:"Male"},
    {name:'rasmi',age:21,gender:"Female"}
]


//  giving types of function

const add = (a:number,b:number):number => a+b;
add(4,5)
// add(4,'str'); gives you an error

//  when you want return nothing from function than we use void type ==> we not use undefined than it gives some more complication
const returnNoting = (a :string,b:string|number):void=>{
    console.log(a+b)
}
const ret = (a:string,b:string) :undefined=>{
    console.log(a+b);
    return;   // need to write return keyword when we use undefined that's why we void types
}


//  Classes






