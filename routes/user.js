/** Routes for default users **/
const express = require('express');
const router = express.Router();

const path = require('path');

/**
 * Renders the home page
 */
router.get('/', async (req, res) => {
    try {
        res.render('pages/home', { title: "Home" });
    } catch (e) {
        res.status(500).json({ status: 500, error: 'Something went wrong with the server.'});
    }
});

module.exports = router;