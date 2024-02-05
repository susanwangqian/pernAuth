const {Router} = require('express')
const router = Router();

// use the home URL: '/'
// callback: request, response
router.get('/', (req, res) => {
    return res.send('working!');
});

router.get('/register', (req, res) => {
    return res.send('register route!');
});

module.exports = router;