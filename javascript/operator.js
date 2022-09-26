

//1. String concatenation
console.log('my' + ' cat');
console.log('1' +2);
console.log(`string literals:
1 + 2 = ${1+2}`);

console.log('ellie\'s \n\tbook');

//2.Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//3. Increment and decrement
let container = 2;
const preIncrement = ++container;
//container = container + 1
// preIncrement = container
console.log(`preIncrement = ${preIncrement}, container=${container}`);
const postIncrement = container++;
//postIncrement = container
//container = container + 1
console.log(`postIncrement = ${postIncrement}, container=${container}`);
const predecrement = --container;
console.log(`predecrement = ${predecrement}, container=${container}`);
const postdecrement = container--;
console.log(`postdecrement = ${postdecrement}, container=${container}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y; //x = x + y
x -= y; 
x *= y;
x /= y; //x = x/y; 0.5

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or eqaul

//6. Logical operators: ||(or) , && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

//|| (or), find the first truthy value
console.log(`or: ${value1 || value2 || check()}`); //무거운 연산을 뒤로

//&&(and), find the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

//nullableObject && nullableObject.something  null이 아닐때만 something을 받아옴
// if(nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i ++) {
        //wasting time
        console.log('lol');
    }
    return true;
}

//! (not)
console.log(!value1);

//7. Equality
//== loose equality, with type conversion
//=== strict equality, no type conversion -> type이 다르면 같지 않음
const ellie1 = {name: "ellie"};
const ellie2 = {name: "ellie"};
console.log(ellie1 == ellie2); //false

//8.Conditional operators: if
const name = 'jueun';
if (name === 'ellie'){
    console.log('welcome');
} else if (name === 'coder'){
    console.log('hi coder');
} else {
    console.log('unknown');
}

//9. Ternary operator: ?
console.log(name === 'ellie' ? 'yes' : 'no');

//10. switch statement
//use for multiple if checks
//use for enum-like value check
// use for multiple type checks in TS
const browser = "IE"
switch (browser) {
    case "IE":
        console.log("IE");
        break;
    case "Chrome":
        console.log("Chrome");
        break;
    case "Firefox":
        console.log("Firefox");
        break;
    default:
        console.log("same all");
        break;
}

//11.Loops
//while loop, while the condition is truthy, body code is executed
let i =3;
while(i > 0){
    console.log(i);
    i--;
}

//do while loop, body code is executed first, then check the condition.
do {
    console.log(`do while:${i}`);
} while(i > 0);


//for loop, for(begin; condition; step), first begin, execute step and body in the given condition
for ( i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

//nested loops -> cpu에 좋지 않음
for( let i = 0; i < 10; i++){
    for( let j = 0; j < 5; j++){
        console.log(i,j);
    }
}
//break- loop전체 빠져나가기, continue - 이번것만 빠져나가기
//Q1. print only even numbers(use continue)
for(let i = 0; i < 11; i++){
    if(i % 2 === 0){
        console.log(i)
    } else{
        continue;
    }
};

//Q2. print numbers until reaching 8

for(let i = 0; i < 11; i++){
    if(i > 8) {
        break
    } else{
        console.log(i)
    };
}