const router = require('express').Router();
const path = require('path');
//show group form view//
router.get('/group', (clientReq,serverRes) => {
    serverRes.sendFile(path.join(__dirname, '../views/group_form.html'));
});


module.exports = router;