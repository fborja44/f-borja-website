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

/**
 * Renders the about page
 */
 router.get('/about', async (req, res) => {
    try {
        res.render('pages/about', { title: "About" });
    } catch (e) {
        res.status(500).json({ status: 500, error: 'Something went wrong with the server.'});
    }
});

/**
 * Renders the projects page
 */
 router.get('/projects', async (req, res) => {
    try {
        res.render('pages/projects', { title: "Projects" });
    } catch (e) {
        res.status(500).json({ status: 500, error: 'Something went wrong with the server.'});
    }
});

/**
 * Renders the contact page
 */
 router.get('/contact', async (req, res) => {
    try {
        res.render('pages/contact', { title: "Contact" });
    } catch (e) {
        res.status(500).json({ status: 500, error: 'Something went wrong with the server.'});
    }
});

/**
 * Renders the blog page
 */
 router.get('/blog', async (req, res) => {
    try {
        res.render('pages/blog', { title: "Blog" });
    } catch (e) {
        res.status(500).json({ status: 500, error: 'Something went wrong with the server.'});
    }
});

module.exports = router;