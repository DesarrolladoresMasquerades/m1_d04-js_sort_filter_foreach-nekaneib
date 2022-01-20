// Class code examples

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort()

console.log("After: ", numbers)

console.log(typeof numbers [0]) // elements

console.log(numbers === numbers.sort())

// Passing the sorting criteria using a function

//Rules are that TWo elements will be given to your funciton and your funciton MUST return -1, 0 or 1 accoridn to wether el1 is smaller equal or greater the el2

function sortMyNumbers ( el1, el2 ){
    if (el1 < el2) return -1
    if (el1 === el2) return 0
    if (el1 > el2) return 1
} 

function quickSort( el1, el2){
    return el1 - el2
}

const sortedNumbers = numbers.sort(sortMyNumbers)
console.log("Sorted Numbers: ", sortedNumbers)

const students = [
    {firstName: 'John', lastName: 'Carr', age: 34},
  {firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21},
  {firstName: 'Sarah', lastName: 'O\'Connor', age: 45},
]




function sortStudentsByAge(stud1, stud2){
   if (stud1.age < stud2.age) return -1
   if (stud1.age === stud2.age) return 0
   if (stud1.age > stud2.age) return 1
}

function sortStudentsByAgeQuick(student1, student2){
    return parseInt(student1.age) - parseInt(student2.age)
}

const sortedStudents = students.sort(sortStudentsByAgeQuick)
console.log(sortedStudents)

