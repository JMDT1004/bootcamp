const express = require('express');
const db = require('./db/connection')
const api_routes = require('./routes/api_routes');
const view_routes = require('./routes/view_routes');
const app = express();

const PORT = process.env.PORT || 3001;


//middleware//
app.use(express.json());//allows client browser to send json requests//

app.use(express.static('public'));//allows the client/browser to access any folders or files in public. opeining the public folder at the root//

//load route//
app.use('/', api_routes);
app.use('/', view_routes);

//connect to db and create all tables based on models//
db.sync()
    .then(() => {
        //start server//
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

    });

