const express = require('express');
const router = express.Router();

router.get('/tutors', (req, res) => {
    const str = [
        {
            "name": "John Doe",
            "msg": "I tutor CS 70!",
            "username": "johndoe"
        },
    ];
    res.end(JSON.stringify(str));
});

router.post('/addTutor', (req, res) => {
    res.end('NA');
});

module.exports = router;