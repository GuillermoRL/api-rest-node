const { Router, response } = require('express');
const router = Router();
const fetch = require('node-fetch');
const API = "https://jsonplaceholder.typicode.com/users";

router.get('/', async (req, res) => {
    const response = await fetch(API);
    const users = await response.json()
    res.status(200).json(users);
});

module.exports = router;