const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/add', (req, res) => {
    res.render('libros/add');
});

router.post('/add', async (req, res) => {
    const { title, fecha, texto } = req.body;
    const newLink = {
        title,
        texto,
        fecha,
        usuario_id: req.usuario.id
    };
    await pool.query('INSERT INTO libros set ?', [newLink]);
    req.flash('success', 'Story Guardado correctamente');
    res.redirect('/libros');
});

router.get('/', isLoggedIn, async (req, res) => {
    const links = await pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
    res.render('links/list', { links });
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM links WHERE ID = ?', [id]);
    req.flash('success', 'Link Removed Successfully');
    res.redirect('/links');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM links WHERE id = ?', [id]);
    console.log(links);
    res.render('links/edit', {link: links[0]});
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, url} = req.body; 
    const newLink = {
        title,
        description,
        url
    };
    await pool.query('UPDATE links set ? WHERE id = ?', [newLink, id]);
    req.flash('success', 'Link Updated Successfully');
    res.redirect('/links');
});

module.exports = router;