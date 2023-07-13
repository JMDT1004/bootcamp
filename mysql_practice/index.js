const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'books_db' // Replace with your database name
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});

inquirer.prompt([
    {
        type: 'input',
        message: 'Name of Biography',
        name: 'name'
    }
])
    .then((answer) => {
        const biographyName = answer.name;

        const query = 'INSERT INTO biographies (name) VALUES (?)';
        connection.query(query, [biographyName], (err, result) => {
            if (err) {
                console.error('Error inserting the biography:', err);
            } else {
                console.log('Biography inserted successfully.');
            }
            connection.end(); // Close the database connection
        });
    })
    .catch((err) => {
        console.error('Error:', err);
        connection.end(); // Close the database connection
    });
