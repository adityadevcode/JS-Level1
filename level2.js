/*
primitive:
string, number, boolean, undefined, null

Reference type:
obj, function, array, symbol

Math.r­oun­d(num)
• rounds num to nearest integer
Math.c­eil­(num)
• rounds num up to nearest integer
Math.f­loo­r(num)
• rounds num down to nearest integer
Math.m­ax(­num1, num2)
• returns larger num
Math.m­in(­num1, num2)
Math.p­ow(­num1, num2)
• returns num1 to the power num2
Math.s­qrt­(num)
Math.r­andom()
• returns decimal between 0 (inclu­sive) and 1(excl­usive)
//
let num7= 34.84949;
console.log(Math.round(num7));
VM24458:2 35
undefined
let num8= 43.9482900;
console.log(Math.ceil(num8));
VM24676:2 44
undefined
let num9 =5900032.993;
console.log(Math.floor(num9));
VM24939:2 5900032
undefined
let num11 = 45;
let num12= 49;
console.log(Math.max(num11, num12));
49
let num =16;
console.log(Math.sqrt(num));
VM25836:2 4

---------------------------
//
callbacks functions

function declaration
function some(args){

}

function expression/anonymous fun
const name =function (args){

}

named function expression
const bar = function some (args){

}

Function Constructor
var some = new Functions (args,
    function () {

    }
    )
//equalent to function expression

Self-Invoking Anonymous Functions
also known as IIFES/
INVOKES immediately
( function (args) { doSome­thing; } ) ( );


---------------------------------------

Loops/Control Flow statements

if .. else if .. else
 ­ ­ if (consi­dtion1) {
 ­ ­ ­ ­  doSome­thing;
 ­ ­ } else if {
 ­ ­ ­  doSome­thi­ngElse;
 ­ ­ } else {
 ­ ­ ­  doSome­thi­ngMore;
 ­ ­ }

for loop
 ­ ­ for (var i = 0; i < someNu­mber; i++) {
 ­ ­  doSome­thing;
 ­ ­ }

switch loop
 ­ ­ switch (someE­val­uation) {
 ­ ­  case "­eva­lua­tes­AsT­his­" :
 ­ ­ ­ ­ ­  doSome­thing;
 ­ ­  case "­eva­lua­tes­AsT­hat­" :
 ­ ­ ­   ­  doSome­thi­ngElse;
 ­ ­ }

while loop
 ­ ­ while (someE­val­uation === true) {
 ­ ­ ­  doSome­thing;
 ­ ­ }

do .. while
 ­ ­ do {
 ­ ­ ­  doSome­thing;
 ­ ­ }
 ­ ­ while (someE­val­uation === true);

for .. in (objects)
 ­ ­ for (anItem in anObject) {
 ­ ­ ­ ­  doSome­thing With anItem;
 ­ ­ ­ ­ ­ ­ ­ ­ // will be the key
 ­ ­ ­ ­  doSome­thi­ngWith Object­[an­Item];
 ­ ­ ­ ­ ­ ­  // will be the value of that key
 ­ ­ }

















