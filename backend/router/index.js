const express = require('express');

const router = express.Router();
const { picturesController } = require('../controllers');

router.get('/', picturesController.getPictures);

/**
 * Expose all routes that you need
 */
module.exports = router;
