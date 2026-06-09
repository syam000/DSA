// declare a variable
let counter = 0;

// declare a constant
const length = 10;

// array with duplicate values
let array = [1,3,4,4];

console.log(array);

// nested object — department is an object itself
let object = {
    "name":"abc",
    "id":1,
    "department": {
        "id": 6
    }
}

console.log(object);

let inputText = 'Hello this is cool';

// .length counts characters including spaces
console.log(`length of the string is ${inputText.length}`);

// iterate character by character using index
for(let index = 0; index < inputText.length; index++) {
    console.log(inputText[index]);
}

