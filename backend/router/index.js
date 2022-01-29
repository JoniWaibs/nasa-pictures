const express = require('express');

const router = express.Router();
const { picturesController } = require('../controllers');

router.get('/', picturesController.getPictures);

module.exports = router;
