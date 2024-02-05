const {Router} = require('express');
const { getUsers } = require('../controllers/auth');
const router = Router();

// use the home URL: '/'
// callback: request, response
router.get('/', (req, res) => {
    return res.send('working!');
});

router.get('/register', (req, res) => {
    return res.send('register route!');
});

// callback function here is getUsers from /controllers/auth.js
router.get('/get-users', getUsers);

module.exports = router;