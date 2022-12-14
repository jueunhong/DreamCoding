//Function
//- fundamental building block in the program
//- subprogram can be used multiple times
//- performs a task or calculates a value

//1. Function declaration
//function name(param1, param2) {body... return; }
//one fuction === one thing
//naming: doSomething, command, verb
//function is object in JS
function log(message){
    console.log(message);
}
log('Hello');

//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);


//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`)
}
showMessage('Hi!');

//4. Rest parameters (added in ES6)
function printAll(...args) {
    console.log(args);
    for (let i = 0; i <args.length; i++){
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');

//5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
 let message ='hello';
 console.log(message); //local variable
 console.log(globalMessage);
 function printAnother() {
    console.log(message);
    let childMessage = 'hello';
 }
 //console.log(childMessage); error 부모에서 볼 수 없음 
}

printMessage();


//6. Return a value
console.log(`sum: ${sum(1,2)}`); //hoisting

function sum(a,b) {
    return a + b;
}
const result = sum(3,4);
console.log(`sum: ${result}`);

//7. Early return, early exit
//bad
function upgradeUser(user) {
    if(user.point > 10) {
        //long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    //long upgrade logic...
}

//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other function
//can be returned by another function

//1. Function expression
//a function declaration can be called earlier than it is defined. (hoisted)
//a function expression is created when the execution reaches it
const print = function() {
    //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(2,5));


//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('yes!');
}
//named function
//better debugging
//recursions
const printNo = function print() {
    console.log('no!')
    //print() 
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//always anonymous
// const simplePrint = function () {
//     console.log('simplePrint');
// };

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    //do something more
    return a * b;
}

//IIFE: Immediately Invoked Function Expresstion
(function hello() {
    console.log('IIFE');
})();


//calculate function
const calculate =  (command, a, b) => {
   if(command == 'add'){
        console.log(a + b);
    } else if(command == 'minus') {
        console.log(a - b);
    } else if(command == 'multiply'){
        console.log(a * b);
    } else if(command == 'divide'){
        console.log( a / b);
    } else if(command == 'remainder'){
        console.log(a % b);
   }
}

calculate('minus', 14, 4);