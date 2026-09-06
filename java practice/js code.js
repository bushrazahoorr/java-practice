// escaping literal quotes in strings
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr)

// concatenating strings with plus operator
var ourStr = "I come first. " + "I come second.";
console.log(ourStr)

// bracket notation to find first character in string
var firstLetterOfFirstName = "";
var firstName = "Bushra";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName)

// find length of string
var firstNameLength = 0;
var firstName = "bushra";
firstNameLength = firstName.length;
console.log(firstNameLength)

// bracket Notation to find Nth character in string
var firstName = "Bushra";
var secondLetterOfFirstName = firstName[1]
console.log(secondLetterOfFirstName)

// word Blanks
function wordBlanks(myNoun, myAdjective, myAdverb, myVerb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + "to the store" + myAdverb;
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

//store Multiple Values with Arrays
var myArray = ["Bushra", 1 ];
console.log(myArray)

// Access Array Data with Indexes
var myArray = [50,60,70];
var myData = myArray[0];
console.log(myData)

// Modify Array Data with Indexes
var myArray = [20, 30, 40];
myArray[1] =45;
console.log(myArray)

// Access Multi-Dimensional Arrays with Indexes
var myArray =  [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[0][1];
console.log(myData)

//manipulate arrays with push()
var myArray =[["John", 22],["cat", 12]];
myArray.push(["dog", 2])
console.log(myArray[2])

// Manipulate Array with pop()
var myArray = [1, 2, 3];
var removedFromMyArray = myArray.pop();
console.log(myArray)

// Manipulate array with shift
var ourArray = [["John", 24], ["dog", 11]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray.shift())
console.log(removedFromOurArray)

// Manipulate Array with unshift
var myArray = [["Ali", 21], ["Apple, 22"]];
myArray.unshift();
myArray.unshift(["Paul", 12]);

//Shopping List
var myList = [["cereal",2], ["milk", 4], ["eggs", 12]];
console.log(myList[2])

//Wrte reusable codes with functions
function myReusableFunction(){
    console.log("hey, World");
}
myReusableFunction();
myReusableFunction();

// passing value to functions with arguments
function myFunctionWithArgs(a, b){
    console.log(a - b);
}
myFunctionWithArgs(8, 4);

// Global scope and Functions
var myGlobal = 10;
function fun1() { 
    oopsGlobal = 5;
}
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined"){
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

// Local scope and Function
function myLocalscope(){
    var myVar = 5;
    console.log(myVar);
}
myLocalscope();

// Global vs Local scope in function
var outerWear = "T-Shirt";
function myOutfit(){
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit());
console.log(outerWear)

// Understanding undefined Value Returned from a Function
var sum = 0;
function addThree() {
    sum = sum+5; 
}
function addFive(){
    sum+5;
}

//Assignment with a returned Value
var changed = 0;
function change(num){
    return (num+5) /3;
}
changed = change(10);
console.log(changed)

//Stand in line
function nextInLine(arr, item){
    arr.push(item);
    return arr.shift();
    
}
var testArr = [1,2,3,4,5];
console.log("Before:" + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Boolean Value
function welcomeToBolean(){
    return true;
}

//Use Conditional Logic with If Statement
function ourTrueOrFalse(isItTrue){
    if(isItTrue){
        return "yes, its's true";
    }
    return "No, it's false";
}
console.log(ourTrueOrFalse(true));

// Comparison with Equality Operator
function testEqual(val){
    if(val ==12){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));

//  Comparisons with the Logical and Operator
function testlogicalAnd(val){
    if(val <= 50 && val >= 25){
        return "Yes";
    }
    return "No";
}
console.log(testlogicalAnd(10));

// Else if statement
function testElseIf(val){
    if(val > 10){
        return "Greater than 10";
    } else if (val < 5){
        return "Smaller than 5";
    } else{
        return "Between 5 and 10";
    }
}
testElseIf(7);

// Chaining If Else Statements
function testSize(num){
    if(num <5 ){
        return "Tiny"
    } else if (num < 10){
        return "Small"
    } else if (num <15){
        return "Medium"
    } else if (num <20){
        return "Large"
    } else {
        return "Huge"
    }
}
console.log(testSize(19));

// Switch Statement
function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
            case 2:
                answer = "beta";
                break;
                case 3:
                    answer = "gamma";
                    break;
                    case 4:
                        answer = "delta";
                        break;
    }
    return answer;
}
console.log(caseInSwitch(2));

// Returning Boolean Values from function
function isLess(a, b)
{
   return a < b;
}
console.log(isLess(10,15));

// Counting cards
var count = 0;
function cc(card){
    switch(card){
        case 2:
            case 3:
                case 4:
                    case 5:
                        case 6:
                            count++;
                            break;
                            case 10:
                                case "J":
                                    case "Q":
                                        case "K":
                                             count--;
                                             break;
    }
    var holdbet = 'Hold'
    if (count > 0){
        holdbet = 'Bet'
    }
    return count + " " + holdbet;
}
cc(2); cc('K'); cc(10); cc('k'); cc('A')
console.log(cc(4))

//Build JavaScript Objects
var myDog = {
    "name": "Tommy",
    "legs": 4,
    "tails": 1,
    "friends": []
};

//Accesing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue);
console.log(shirtValue);

// Accessing Object Properties with Bracket Notation
var testObj = {
    "an entree": "burger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink']
console.log(entreeValue);

// Accessing Object Properties with Variables
var testObj = {
    12: "John",
    16: "Mary",
    19: "Anil"
};
var playerNumber = 16;
var player = testObj[playerNumber];
console.log(player)

// updating Object Properties and adding new property
var myDog = {
    "name": "Tommy",
    "legs": 4,
    "tails": 1,
    "friends": []
};
myDog.name = "Little tommy";
myDog['bark'] = "woof!";

// Delete properties from an Object
delete myDog.tails;
console.log(myDog);

// Using Objects for Lookups
function phoneticLookup(val){
    var result = "" ;

var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "frank"
};
result = lookup[val];

return result;
}
console.log(phoneticLookup("alpha"));


// Testing Object for Properties
var myObj = {
    gift: "anything",
    pet: "Kitten",
    bed: "sleigh"
};
function checkObj(checkProp){

   if( myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
   }else{
    return "Not Found"
   }
  
   }
console.log(checkObj("pet"));

//Manipulating Complex Objects
var myMusic = [
    {
        "artist": "Billie Eilish",
        "title": "ocean eyes",
        "release_year": 2011,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 2003,
        "formats": [
            "Youtube video"
        ]
    }
];
console.log(myMusic)

// Accessing Nested Objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)

//Accessing Nested Arrays
var myPlants = [
 {
    type: "flowers",
    list: [
        "rose",
        "tulip",
        "dandelion"
    ]
},
{
    type: "trees",
    list: [
        "fir",
        "pine",
        "birch"
    ]
}
];
var secondTree = myPlants[1].list[1];
console.log(myPlants)

// Iterate with While Loops
var myArray = [];
var i = 0;
while(i < 5){
    myArray.push(i);
    i++;
}
console.log(myArray);

// Iterate with For Loops
var myArray = [];

for(var i = 1; i < 6; i++){
    myArray.push(i);
}
console.log(myArray);

// Iterate Odd Numbers with a For Loop
var myArray = [];
for(var i = 1; i < 10; i+=2){
    myArray.push(i);
}
console.log(myArray)

// Count Bcakwards with a For Loop
var myArray = [];
for (var i = 10; i > 0; i -= 2){
    myArray.push(i);
}
console.log(myArray);

//Iterate through an Array with a For Loop
var myArr = [2, 3, 4, 5, 6];
var total = 0;

for(var i = 0; i < myArr.length; i++){
    total += myArr[i];
}
console.log(total);

// Nesting For Loops
function MultiplyAll(arr){
    var product = 1;

    for (var i=0; i < arr.length; i++){
        for(var j=0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}
var product = MultiplyAll([[1,2],[3,4],[5,6,7]]);
console.log(product);

//Iterate with Do-While Loops
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while(i < 5)
console.log(i, myArray);

// Profile Lookup
var contacts = [
    {
        "firstName": "Ayesha",
        "lastName": "Zia",
        "number": "054679829",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
     {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0999342845",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
     {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "04672845297",
        "likes": ["Intriguing Cases", "Violin"]
    }
];

function lookUpProfile(name, prop){
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
           return contacts[i][prop] || "No such property";
        }
    }
    return "No such contacts";
}
var data = lookUpProfile("Harry", "likes");
console.log(data);

// Generate Random Fractions
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());

// Generate Random Whole Numbers
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

// generate random Number within a Range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(5, 15);
console.log(myRandom);

// Use the parseInt Function
function convertToInteger(str) {
    return parseInt(str)
}
convertToInteger("56");

// Use the parseInt Function with a Radix
function convertToInteger(str) {
    return parseInt(str, 2)
}
convertToInteger("10011");

// Use the Conditional(ternary) Operator
function checkEqual(a, b) {
    return a === b ? true : false;
}
console.log(checkEqual(1, 2));

// Use Multiple Conditional(ternary) Operator
function checkSign(num) {
    return num > 0 ? "positive" : num <0 ? "negative" : "zero"
}
console.log(checkSign(-10));

// Compare Scopes of the var and let Keywords
function checkScope() {
    "use strict";
    let i = "function scope";
    if(true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}
checkScope();

// Declare a Read-Only Variable with the const Keyword
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    
     for(let i = 0; i< str.length; i+=2) {
        console.log(SENTENCE);
     }
}
printManyTimes("This");


// Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);

// Prevent Object Mutation
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
        MATH_CONSTANTS.PI = 99;
    }
    catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

// Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();

// write arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));   

// Write Higher Order arrow function
const increment = (function()
{
    return function increment(number, value = 1) {
        return number + value;
    };
}) ();
console.log(increment(5, 2));
console.log(increment(5));

// Use the Rest Operator with Function Parameters
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
}) ();
console.log(sum(1, 2, 3, 4));

// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = 'potato'
}) ();
console.log(arr2);


Use Destructuring Assignment to Assign Varisbales from Objects
var voxel = {x: 3.6, y:7.4, z: 6.54 };
var x = voxel.x;
var y = voxel.y;
var = voxel.z;

const { x : a, y : b, z : c } = voxel;

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};
function getTempOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow : getTempOfTomorrow} = avgTemperatures;
    return getTempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

// destructuring Assignment with Nested Objects
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};
function getMaxOfTmrw(forecast) {
    "use strict";
    const { tomorrow : { max : maxOfTomorrow }} = forecast;
    return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

Use Destructuring Assignment to Assign Variables from 
const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]
}) ();
console.log(a);
console.log(b);

// Use Destructuring assignment with the rest Operator
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// Use Destructuring Assignment to pass an Object as a Function's Parameters
const stats = {
    max: 56.7,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.7,
    min: 0.75,
    average: 35.85
};
const half = (function(){
    return function half({ max, min }){
        return (max + min) /2.6;
    }
}) ();
console.log(stats);
console.log(half(stats));

// Create stringd using Template Literals
const person = {
    name: "Bushra Zahoor",
    age: 21
};
const greeting = `Hello, My name is $[person.name]!
I am $[person.age] years old.`;
console.log(greeting);

// Write Concise Object Literal Declarations Using Simple Fields
const createPerson = (name, age, gender) => ( { name, age, gender });
console.log(createPerson("Bushra Zahoor", 21, "female"));

// Write Concise Declarative Functions
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

// Use class Syntax to define a Constructor Function
class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet)

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);

//Use getter and setter to control access to an object
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);



