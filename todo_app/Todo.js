const dayjs = require("dayjs");
const {v4} = require('uuid');

class Todo {
    constructor(id,text,createdOn) {
        this.id=v4();
        this.text=text;
        this.createdOn=dayjs().format('DD/MM/YYYY')
    }
}

module.exports=Todo;