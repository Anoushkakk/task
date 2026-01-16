// Q1
const states = ["Andhra Pradesh", "Bihar", "Uttar Pradesh", "Odisha", "Kerala", "Assam"];
const q1 = states.filter(state => !["A","E","I","O","U"].includes(state[0]));
console.log(q1);

// Q2
let str = "I love my India";
let q2 = str.split(" ").reverse().join(" ");
console.log(q2);

// Q3
let arr = "INDIA".split("");
arr.splice(3, 0, "O", "N", "E", "S");
console.log(arr.join(""));

// Q4
let text = "JavaScript is a powerful programming language";
let vowels = 0, consonants = 0;

for (let ch of text.toLowerCase()) {
    if (/[aeiou]/.test(ch)) vowels++;
    else if (/[a-z]/.test(ch)) consonants++;
}
console.log(vowels, consonants);

// Q5
function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}
console.log(correctfn("I love JvaaScript", "JvaaScript", "JavaScript"));

// Q6
let inputArr = [1,2,3,9,10,7,5,4,3];
let q6 = inputArr.filter(num => num > 5);
console.log(q6);

// Q7
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] }
];

const q7 = students.map(stu => {
    let avg = stu.scores.reduce((a,b) => a+b, 0) / stu.scores.length;
    return { name: stu.name, average: avg };
});
console.log(q7);

// Q8
function repeatedSum(num) {
    while (num > 9) {
        num = num.toString().split("").reduce((a,b) => a + Number(b), 0);
    }
    return num;
}
console.log(repeatedSum(456));

// Q9
function countWords(text) {
    return text.trim().split(/\s+/).length;
}
console.log(countWords("JavaScript is very easy to learn and powerful"));

// Q10
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

// Q11
const data = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};

const q11 = Object.keys(data).map(student => {
    let marks = Object.values(data[student]);
    let avg = marks.reduce((a,b) => a+b, 0) / marks.length;
    return { [student]: { average: avg } };
});
console.log(q11);
