const express = require('express');
const path = require('path');

const app = express();

console.log(__dirname);

const people = [
    {
        id: 1,
        name: 'JD',
        age: 43
    },
    {
        id: 2,
        name: 'Bob',
        age: 99
    }
];


// Will send the index.html file as response
app.get('/', (clientRequestObject, serverResponseObject) => {
    serverResponseObject.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/people', (clientRequestObject, serverResponseObject) => {
    // if (clientRequestObject.query.id === '1') {
    //     serverResponseObject.send(people[0]);
    // }
    // else if (clientRequestObject.query.id === '2') {
    //     serverResponseObject.send(people[1]);
    // }
    // else {
    //     serverResponseObject.send({
    //         message: "Cannot find user",
    //         error: 404
    //     })
    // }
    ////////////////////////////////////////////////////////////////////////
    if (!clientRequestObject.query.id) return serverResponseObject.send(people);
    ////////////////////////////////////////////////////////////////////////
    const userObj = people.find((personObj) => {
        return personObj.id == clientRequestObject.query.id
    });
    ///////////////////////////////////////////////////////////////////////
    serverResponseObject.send(userObj ? userObj : {
        message: 'Cannot find user',
        error: 404
    })
});
/////////////////////////////////////////////////////////////////////////////

app.get('/api/people/:id', (clientRequestObject, serverResponseObject)=>{
    const userObj = people.find((personObj) => {
        return personObj.id == clientRequestObject.params.id
    });
})


app.listen(3333, () => console.log('Server started on port 3333.'));

/////////////////C.O.R.S Cross Origin Resource Sharing/////////////////