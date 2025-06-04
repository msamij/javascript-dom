let quit = false;
const numbers = [];

// while (!quit) {
//   let input = +prompt('Enter a number (Press 0 to quit!):');
//   if (input < 0) {
//     alert('Please enter positive number');
//     continue;
//   } else if (input === 0) {
//     quit = true;
//   } else {
//     numbers.push(input);
//   }
// }

// console.log(numbers);

// for (const element of numbers) {
//   if (element < 10) continue;
//   console.log(element);
// }

let students = {
  John: {
    grade: 80,
  },
  Peter: {
    grade: 90,
  },
  Micheal: {
    grade: 75,
  },
};

// let studentName = prompt('Enter student name:');
// if (studentName in students) console.log(`${studentName} grade is ${students[studentName].grade}`);
// else console.log('Student name not found in database!');

let fruits = ['mango', 'apple', 'bannana'];

// splice returns the array containing the deleted elements.
let newFruits = fruits.splice(1, 1, 'orange');
// console.log(newFruits);
// console.log(fruits);

let numbersList = [1, 2, 3, 4, 5];
let everyNum = numbersList.every(function (cur) {
  return cur >= 1;
});
console.log(everyNum);

let someNum = numbersList.some(function (cur) {
  return cur >= 5;
});
console.log(everyNum);
