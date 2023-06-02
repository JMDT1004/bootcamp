//Objects are unorganized value types//

//all base value types are objects in javascript//

//objects in javascritpt are called properties//

//properties store values and methods//

//"METHODS" are properties that store a function//

var students = ['Mathew', 'FSF'];

var studentName = students[0];

var studentCourse = students[1];

console.log(studentName, studentCourse);


var studentData = {
    name: 'Mathew',
    course: 'FSF',
    school: 'Rutgers',
    location: 'New Jersey',
    age: 26,
    someFunc: function (){
        console.log('wait, what!?!?');
    }
};

console.log(studentData.location);
studentData.someFunc();
