const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const multerMiddleware = require('../middleware/multerMiddleware');

// File upload route
router.post('/file', multerMiddleware.single('file'), uploadController.uploadFile);

// YouTube link route
router.post('/youtube', uploadController.addYouTubeLink);

module.exports = router;
