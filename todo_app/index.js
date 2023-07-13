// const fs = require('fs');
// const inquirer = require('inquirer');
// const dayjs = require('dayjs');
// const currentDate = dayjs().format('DD/MM/YYYY');
// const { v4 } = require('uuid');
// const todos = require('./todos.json'); //////IN NODEJS REQUIRING A JSON FILE 'PARSE'S IT FOR YOU////////////
// const newTodo = import('Todo.js');


// function showMainMenu() {
//     inquirer
//         .prompt({
//             message: 'Welcome!',
//             name: 'welcome',
//             type: 'list',
//             choices: ['Add Task', 'View To Dos', 'Exit App']
//         })

//         .then((answer) => {
//             if (answer.welcome === 'View To Dos') {
//                 console.log(`${newTodo}`);
//             }
//         })

//         .then((answer) => {
//             if (answer.welcome === 'Exit App') {
//                 console.log('Thank you for using our App');
//                 process.exit();
//             } else {
//                 addTodo();
//             }
//         })

//         .catch((error) => {
//             console.error(error);
//         });
// }


// function addTodo() {
//     inquirer
//         .prompt({
//             message: 'Log Activity:',
//             name: 'todo',
//             createdOn: dayjs().toDate(),
//         })
//         .then((answer) => {
//             const newTodo = {
//                 text: answer.todo,
//                 id: v4()
//             };

//             todos.push(newTodo);

//             fs.writeFile('todos.json', JSON.stringify(todos, null, 2), 'utf8', (err) => {
//                 if (err) {
//                     throw err;
//                 };
//                 console.log('Activity Logged!');

//             });


//         }).then(() => {
//             console.log('Finished');
//         })
// }

// showMainMenu();

///////////////////////////////////////////////////////////////////////////////////////////////////////

const inquirer = require('inquirer');
const dayjs = require('dayjs');
const fs = require('fs');
const { v4 } = require('uuid');
const todos = require('./todos.json');
const currentDate = dayjs().format('YYYY-MM-DD');
const newTodo = require('./Todo');

console.log('Current date:', currentDate);

// Show main menu
function showMainMenu() {
    inquirer.prompt(
        {
            type: 'list',
            message: 'Welcome! Choose option below:',
            name: 'welcome',
            choices: ['Add a Todo Task', 'View To Dos', 'Exit the App']
        })

        // .then((answer) => {
        //     if (answer.welcome === 'View To Dos') {
        //         console.log(JSON.stringify(newTodo));
        //     } else showMainMenu();
        // })

        .then((answer) => {
            if (answer.welcome === 'Exit the App') {
                console.log('Closing the app...');
                process.exit();
            } else if (answer.welcome === 'View To Dos') {
                console.log(todos);
            } else addTodo();
        })
        .catch(error => {
            console.error(error);
        });
}

// Prompt to add a todo
function addTodo() {
    inquirer.prompt(
        {
            // type: 'input',
            message: 'Please log your activity:',
            name: 'text'
        })
        .then((answer) => {
            console.log('Logged Todo Activity!');

            const newTodo = {
                id: v4(),
                text: answer.text,
                createdOn: dayjs().toDate()
            };

            todos.push(newTodo);

            fs.writeFile('./todos.json', JSON.stringify(todos, null, 2), err => {
                if (err) throw err;

                console.log('Todo added successfully!');

                showMainMenu();
            });
        })
}

showMainMenu();