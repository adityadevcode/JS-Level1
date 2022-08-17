/*
variables declared with const keyword cant be reassigned, while let and var we can mutate and
re assigned and mutate
- by default declare variables with const, if variable need to 
mututate or reassign later 
-const and let are block scope, var is function scope
-var : variables declared with var are function scoped, meaning that when
a variable is created in a function, everything in that function can access that
variable

const person = "xyz";
person ="sam";
// person cant be reassigned

let name ="tony";
name="james";
console.log(name);
//james, we can reassigned varibles with let and var

-A functioned scoped variable created in a function cant be accessed outside
this function
function myFunction() {
    var myVar = "nick";
    if (true){
        var myVar ="john";
        console.log(myVar); //John 
//actually, myVar being function scoped, we just erased the previous myVar value "Nick" for "John"
    }
    console.log(myVar); //John
}
console.log(myVar); //thorws ref error, myvar is not accessible outside the first function

//var declared variables are moved to the top of the scope at execution
this is called var hositing

console.log(myVar) //some
var myVar="some";

//let are blocked scoped, they are not accessible before they are assigned
cant be redeclared in the same scope

function myFunction() {
    let myVar ="nick";  //one different var
    if(true) {
        let myVar ="john"; // one diff var
        console.log(myVar); //johh
// myvar is blocked scoped, we just created a new variable myvar
// this myVar is not accessible outside this block and totally 
//dependent from first myVar created
}
console.log(myVar); //nick
}
console.log(myVar); throws a reference error, mayVar is not accessible out side

//let and const cant be accessible before being assigned
console.log(myVar);
let myVar="some";

console.log(teVar);
const teVar="so"

//const variables
-are blocked scoped
-are not accessible before being assigned
-cant be redecalred in the same scope
-cant be reassgined

-const variables are not immutable (not able to change)

----------------------------
const for objects
const person = {
    name:'nick'
};
person.name=john // this will work
console.log(person.name); //john
person = some // reassignment not allowed

const for arrays
const person =[];
person.push('john');this will work
console.log(person);

const person = [];
person.push('John'); // this will work ! person variable is not completely reassigned, but mutated
console.log(person[0]) // "John"
person = ["Nick"]

-------------------------
Arrow function
es6 js introduced arrow functio

traditional way
function double(x) {
    return x*2;
}
console.log(double(3)); //6

//arrow
let double = x => x*3;
console.log(double(3));

//in functions we have implict vs explicit
explicit return is a fucntion where the return keyword is used in the body

function double(x) {
    return x * 2; // this function explicitly returns x * 2, *return* keyword is used
  }

//in traditional way of writing functions, the return was always explicit return
// but with arrow functions we can do implicit return means that you dont 
need to use the keyword return to return a value

const double = x => {
     x*4
}
    ;

const double = x => x*4;
console.log(double(4));

-if your function takes only one parameter you can omit the parenthesis aorund it
const double = x => x*4;

-When there is no argument provided to an arrow function, you need to provide parentheses, or it won't be valid syntax
() => {
    const x=2;
    return x;
}


//Arrow functions in obj
const getPerson =()=> ({
    name:"Nick",
    age:24 
})
console.log(getPerson());

{ name: "Nick", age: 24 } -- object implicitly returned by arrow function

//
When there is no argument provided to an arrow function, you need to provide parentheses, or it won't be valid syntax

//
Without arrow function, if you wanted to access a variable from this in a function inside a function, you had to use the that = this or self = this trick.

For instance, using setTimeout function inside myFunc:

function myFunc() {
  this.myVar = 0;
  var that = this; // that = this trick
  setTimeout(
    function() { // A new *this* is created in this function scope
      that.myVar++;
      console.log(that.myVar) // 1

      console.log(this.myVar) // undefined -- see function declaration above
    },
    0
  );
}

But with arrow function, this is taken from its surrounding:

function myFunc() {
  this.myVar = 0;
  setTimeout(
    () => { // this taken from surrounding, meaning myFunc here
      this.myVar++;
      console.log(this.myVar) // 1
    },
    0
  );
}

// function default parameter value
we can set default value to function paramter 

function myFunc(x = 10) {
  return x;
}
console.log(myFunc()) // 10 -- no value is provided so x default value 10 is assigned to x in myFunc
console.log(myFunc(5)) // 5 -- a value is provided so x is equal to 5 in myFunc

The default parameter is applied in two and only two situations:

No parameter provided
undefined parameter provided

//
Destructuring objects and arrays

-destructuring is a convient way of creating new varibles by extracting
some values from data stored in objects or array

destructuring can be used to destructure function parameters or this.props in React projects for instance

object:
const person = {
    name:"some",
    age:44'
    birth:"some"
}

console.log(person);
{name: 'some', age: 44, birth: 'some'}

without destructuring
const name=person.name;
const birth=person.birth;

const person = {
    name:"some",
    age:44,
    birth:"some"
}

console.log(person);
VM7999:7 {name: 'some', age: 44, birth: 'some'}
undefined
const name1= person.name;
console.log(name1);
VM8151:2 some
undefined
const birth1= person.birth;
console.log(birth1);
VM8332:2 some
undefined

//with destructuring

const employee = {
  id: 007,
  name: 'James',
  dept: 'Spy'
}
console.log(employee);
{id: 7, name: 'James', dept: 'Spy'}

const id =employee.id;
const name =employee.name;
console.log(id); //7
console.log(name);//James

const{id,name}=employee;
console.log(id);7
console.log(name);James

// destructuring example

const details = {
    fName:"hello",
    lName:"bye",
    age:24,
    country:"someplace"
}
console.log(details);
const {fName,lName,country}=details;
console.log(fName);
console.log(lName);
console.log(country);
{fName: 'hello', lName: 'bye', age: 24, country: 'someplace'}
hello
 bye
 someplace

//deep nested destructuring
const employee = {
  id: 007,
  name: 'James',
  dept: {
    id: 'D001',
    name: 'Spy',
    address: {
      street: '30 Wellington Square',
      city: 'Chelsea'  
    }
  }  
}
console.log(employee);
const address =employee.dept.address;
console.log(address);
VM13765:13 {id: 7, name: 'James', dept: {…}}
VM13765:15 {street: '30 Wellington Square', city: 'Chelsea'}

//Destructuring Array
const myArray = ["a","b","c"]
console.log(myArray);
(3) ['a', 'b', 'c']

const [a,b,c] =myArray;
console.log(a);a
console.log(b);b
console.log(c);c

//without destructuring
const x =myArray[0];//a
const y=myArray[1];//b
const z=myArray[2];//c

--------------------------------------------
//
Array Methods-map/filter/reduce/find
-map/filter/reduce/find are array methods that are coming from a programming
paradigm named functional programming

/Array.prototype.map() takes an array, does something on its elements and 
returns an array with the transformed elements.
/Array.prototype.filter() takes an array, decides element by element if it
 should keep it or not and returns an array with the kept elements only
/Array.prototype.reduce() takes an array and aggregates the elements into a 
single value (which is returned)
/Array.prototype.find() takes an array, and returns the first element that 
satisfies the provided condition.

const numbers = [0,1,2,3,4,5,6];

const doubleNumbers =numbers.map(n=>n*2);
(7) [0, 2, 4, 6, 8, 10, 12]
// we can keep anything instead of n like e (n is naming convention)
//evennumber
const numbers = [0,1,2,3,4,5,6];
const evenNumbers = numbers.filter(n => n%2===0);
console.log(evenNumbers);
[2,4,6]

//odd numbers
const num3 = [1,2,3,4,5,6,7,8];
const oddNum = num3.filter(n=>n%2);
console.log(oddNum);
[1,3,5,7]

//reduce
const numbers = [1,2,3,4,5,6];
const sum =numbers.reduce((prev, next)=>prev+next,0);
console.log(sum);21

//find (greater than 4)
const numbers1 = [1,2,3,4,5,6,7];
const greaterThanFour = numbers1.find ((n)=>n>4);
console.log(greaterThanFour);5
const lessThan=numbers1.find((n)=> n<45);
console.log(lessThan);1

//
Compute total grade sum for students with grades 10 or above by composing map, filter and reduce:

const students = [
  { name: "Nick", grade: 10 },
  { name: "John", grade: 15 },
  { name: "Julia", grade: 19 },
  { name: "Nathalie", grade: 9 },
];

const aboveTenSum = students
  .map(student => student.grade) // we map the students array to an array of their grades
  .filter(grade => grade >= 10) // we filter the grades array to keep those 10 or above
  .reduce((prev, next) => prev + next, 0); // we sum all the grades 10 or above one by one

console.log(aboveTenSum) // 44 -- 10 (Nick) + 15 (John) + 19 (Julia), Nathalie below

//
We are using .map on the numbers array, the map is iterating on each element of the array and passes 
it to our function. The goal of the function is to produce and return a 
new value from the one passed so that map can replace it.

Array.prototype.map()

const numbers =[1,2,4,5,6,7,8];
const doubleNumbers = numbers.map(function(n){
return n*2;
});
console.log(doubleNumbers);
// [0, 2, 4, 6, 8, 10, 12]

We are using .map on the numbers array, the map is iterating on each element of the array and passes
 it to our function. The goal of the function is to produce and return a new value from the one passed so that map can replace it.

//
const numbers =[1,2,3,4,5,6]
const doubleNumbers = numbers.map(n => n*2);
console.log(doubleNumbers);

const numbers =[0,1,2,3,4,5,6];
const doubleNumbers = numbers.map(n => n*2);
console.log(doubleNumbers);
 (7) [0, 2, 4, 6, 8, 10, 12]

 Array.prototype.map()
 ------------------------

 Array.prototype.filter()

 const numbers =[1,2,3,4,5,6]
const evenNumbers = numbers.filter(function(n) {
  return n % 2 === 0; // true if "n" is par, false if "n" isn't
});
console.log(evenNumbers); // [0, 2, 4, 6]

--------------------------
Array.prototype.reduce()

The reduce method goal is to reduce all elements of
 the array it iterates on into a single value.

const sum = numbers.reduce(
    function(acc,n) {
        return acc+n;
    },
);
console.log(Sum)//21

//above code with arrow function
const sum = numbers.reduce(acc,n) => acc + n, 0);
console.log(sum); 21

-------------------------
spread operator: (... )

const arr1 =["a","b","C"];
const arr2 =["tomy","kim"];
const arr3 =[...arr1, ...arr2];
console.log(arr3);
(5) ['a', 'b', 'C', 'tomy', 'kim']


function myFunc(x,y, ...params) {
    console.log(x);
    console.log(y);
    console.log(params);
}

myFunc("a","b","c","d","e","f");
a
 b
 (4) ['c', 'd', 'e', 'f']

---------------------------
Function Rest parameter
In function parameters, we can use the rest operator to inject parameters into an array we can loop in

function myFunc() {
    for (var i=0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}

myFunc("Nick", "Anderson", 10, 12, 6);
Nick
Anderson
10
12
6

---------------------------------
Promises:
-a promise is an obj which can be returned synchrnously from an asynchrnous fucntion
- promises can be used to avoid callback hell


const fetchingPosts =new Promise((res,rej) => {
    $.get("/posts")
    .done(posts => res(posts))
    .fail(err =>rej (err));
});

fetchingPosts
.then(posts=>console.log(posts))
.catch(err =>console.log(err));

explanation:
when we do an ajax request the response is not synchronous because 
you want a resourece that takes some time to come. it even may never come if the resources
you have requested is unavailable for some reason (404)

-to handle that kind of situation es2015 given us promises
-promise has three states
PENDING
FULLFILLED
REJECTED

-WE want to use Promises to handle an Ajax request to fetch the resource x

--------------------------

Template Literals:
express interpolation for single and multiple line strings

const name = "NICK";
`hello ${name}, the following expression is ${2+2}`;
output:
'hello NICK, the following expression is 4'

--------------

// mathConstants.js
export const pi = 3.14;
export const exp = 2.7;
export const alpha = 0.35;

// -------------

// myFile.js
import { pi, exp } from './mathConstants.js'; // Named import -- destructuring-like syntax
console.log(pi) // 3.14
console.log(exp) // 2.7

// -------------

// mySecondFile.js
import * as constants from './mathConstants.js'; // Inject all exported values into constants variable
console.log(constants.pi) // 3.14
console.log(constants.exp) // 2.7

-------------------------------
//class

var Person = 
































































 

















































































































