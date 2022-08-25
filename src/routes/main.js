const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const adminMiddleware = require('../middlewares/userMiddleware');

router.get('/',indexController.index);
router.get('/admin',adminMiddleware ,indexController.admin);


module.exports = router;