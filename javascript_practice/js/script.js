// var students = ['John', 'FSF', 'Jamil', 'FSF', 'Roman', 'FSF'];


// // for (var index = 0; index < students.length; index+=2) {
// //     console.log('Name:', students[index]);
// //     console.log('Course:', students[index + 1]);
// // }


// // function printStudentInfo(studentName) {
// //     console.log('Name:', studentName);
// //     // console.log('Course:', students[index + 1]);
// // }

// // printStudentInfo(students[0]);



// function printStudentInfo(studentName, studentCourse) {
//     console.log('Welcome to class!');
//     console.log('Name:', studentName);
//     console.log('Course:', studentCourse);
//     console.log('Please utilize office hours for help!');

// }

// printStudentInfo(students[0], students[1]);


// function printStuff(name, age, height){
//     console.log(height, age);
// }

// printStuff('JT', 33, 69)

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var characters = [];
var combined = lowercase.concat(uppercase).concat(numbers);

var amount = 50;
var random = Math.random();
var ranIndex = Math.floor(random * combined.length);
var password = '';

for (var count = 0; count < amount; count++) {
    random = Math.random();
    ranIndex = Math.floor(random * combined.length);
    password += combined[ranIndex];
}

console.log(password);
// document.body.innerText = password;
















