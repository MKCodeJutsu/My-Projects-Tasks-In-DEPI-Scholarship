// assume 'students' is the array of 50 student objects
const students = [
  { name: 'John', age: 20, gender: 'Male' },
  { name: 'Jane', age: 22, gender: 'Female' },
  { name: 'Alice', age: 21, gender: 'Female' },
  { name: 'Bob', age: 20, gender: 'Male' },
  { name: 'Eve', age: 23, gender: 'Female' },
  { name: 'Charlie', age: 22, gender: 'Male' },
  { name: 'David', age: 21, gender: 'Male' },
  { name: 'Frank', age: 20, gender: 'Male' },
  { name: 'George', age: 22, gender: 'Male' },
  { name: 'Hannah', age: 23, gender: 'Female' },
  { name: 'Ivan', age: 21, gender: 'Male' },
  { name: 'Julia', age: 20, gender: 'Female' },
  { name: 'Kevin', age: 22, gender: 'Male' },
  { name: 'Lily', age: 23, gender: 'Female' },
  { name: 'Mike', age: 21, gender: 'Male' },
  { name: 'Nina', age: 20, gender: 'Female' },
  { name: 'Oliver', age: 22, gender: 'Male' },
  { name: 'Pamela', age: 23, gender: 'Female' },
  { name: 'Quincy', age: 21, gender: 'Male' },
  { name: 'Rachel', age: 20, gender: 'Female' },
  { name: 'Sam', age: 22, gender: 'Male' },
  { name: 'Tanya', age: 23, gender: 'Female' },
  { name: 'Uma', age: 21, gender: 'Female' },
  { name: 'Victor', age: 20, gender: 'Male' },
  { name: 'Wendy', age: 22, gender: 'Female' },
  { name: 'Xavier', age: 23, gender: 'Male' },
  { name: 'Yvonne', age: 21, gender: 'Female' },
  { name: 'Zoe', age: 20, gender: 'Female' },
  { name: 'Adam', age: 22, gender: 'Male' },
  { name: 'Bella', age: 23, gender: 'Female' },
  { name: 'Chris', age: 21, gender: 'Male' },
  { name: 'Diana', age: 20, gender: 'Female' },
  { name: 'Ethan', age: 22, gender: 'Male' },
  { name: 'Flora', age: 23, gender: 'Female' },
  { name: 'Gabriel', age: 21, gender: 'Male' },
  { name: 'Helen', age: 20, gender: 'Female' },
  { name: 'Isaac', age: 22, gender: 'Male' },
  { name: 'Juliet', age: 23, gender: 'Female' },
  { name: 'Kai', age: 21, gender: 'Male' },
  { name: 'Lena', age: 20, gender: 'Female' },
  { name: 'Matthew', age: 22, gender: 'Male' },
  { name: 'Natalie', age: 23, gender: 'Female' },
  { name: 'Owen', age: 21, gender: 'Male' },
  { name: 'Penelope', age: 20, gender: 'Female' },
  { name: 'Quinn', age: 22, gender: 'Male' },
  { name: 'Rebecca', age: 23, gender: 'Female' },
  { name: 'Sofia', age: 21, gender: 'Female' },
  { name: 'Tobias', age: 20, gender: 'Male' },
  { name: 'Una', age: 22, gender: 'Female' },
  { name: 'Vincent', age: 23, gender: 'Male' },
  { name: 'Willa', age: 21, gender: 'Female' },
  { name: 'Xanthe', age: 20, gender: 'Female' },
];

// destructuring the gender property from all student objects using forEach()

 let maleCount = 0;
 let femaleCount = 0;

 students.forEach((student) => {
   if (student.gender === 'Male') {
     maleCount++;
   } else if (student.gender === 'Female') {
     femaleCount++;
   }
 });

 console.log(`Male students: ${maleCount}`);
 console.log(`Female students: ${femaleCount}`);

//  destructuring the gender property from all student objects using filter()

const males = students.filter((student) => student.gender === 'Male');
const females = students.filter((student) => student.gender === 'Female');

console.log(`Male students: ${males.length}`);
console.log(`Female students: ${females.length}`);


//  destructuring the gender property from all student objects using reduce()

const counts = students.reduce((acc, student) => {
  if (student.gender === 'Male') {
    acc.maleCount++;
  } else if (student.gender === 'Female') {
    acc.femaleCount++;
  }
  return acc;
}, { maleCount: 0, femaleCount: 0 });

console.log(`Male students: ${counts.maleCount}`);
console.log(`Female students: ${counts.femaleCount}`);


