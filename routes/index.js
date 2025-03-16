const {Router} = require("express");
const router = Router();
const {postSignUp, getHome, getSignUp} = require('../controllers/indexController');

router.get('/', getHome);

router.get('/sign-up', getSignUp);
router.post('/sign-up', postSignUp);

router.get('/login', getLogin);
module.exports = router;