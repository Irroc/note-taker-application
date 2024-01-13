const router = require('express').Router();

// Import our modular routers for /notes
const notes = require('./notes');
router.use('/notes', notes);

module.exports = router;