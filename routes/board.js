const express = require('express');
const handle = require('../handler/board/index');

const router = express.Router();

/* GET users listing. */
router.get('/', handle.list);

module.exports = router;
