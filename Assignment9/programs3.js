function scopeExample() {
  var a = 50;
  let b = 60;
  const c = 70;

  if (true) {
    var a = 400;   
    let b = 500;   
    const c = 600; 
  }

  console.log("var a:", a); 
  console.log("let b:", b);
  console.log("const c:", c); 
}

scopeExample();


const fruits = ["Papaya", "Pineapple", "Chickoo", "Apple", "Grapes"];

function getSecondFruit() {
  return fruits[1];
}

console.log("Second Fruit:", getSecondFruit());

function modifyArray(arr) {
  arr.push("New Element");
  arr.pop();
  return arr;
}

console.log("Modified Array:", modifyArray([1, 2, 3]));

const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}

console.log("Squared Numbers:", squareNumbers(numbers));


function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

console.log("Odd Numbers:", getOddNumbers([1, 2, 3, 4, 5, 6]));

const person = {
  name: "Anoushka",
  age: 20,
  occupation: "Student"
};

function greetPerson(person) {
  console.log(
    `Hello, my name is ${person.name}. I am ${person.age} years old and I work as a ${person.occupation}.`
  );
}

greetPerson(person);


function calculateArea(rect) {
  return rect.width * rect.height;
}

console.log("Rectangle Area:", calculateArea({ width: 9, height: 3 }));

function getObjectKeys(obj) {
  return Object.keys(obj);
}

console.log("Object Keys:", getObjectKeys({ a: 2, b: 4, c: 6 }));


function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

console.log("Merged Object:", mergeObjects({ a: 1 }, { b: 2 }));


function sumArray(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log("Sum of Array:", sumArray([10, 20, 30, 40]));