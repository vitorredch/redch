const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'REDCH', heading: 'BEM-VINDO A REDCH' });
});

module.exports = router;
