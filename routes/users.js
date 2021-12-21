const { Router } = require('express');
const { check } = require('express-validator');
const { usersGet, usersPut, usersPost, usersPatch, usersDelete } = require('../controllers/users.controller');

const router = Router();

router.get( '/', usersGet );

router.post( '/', [
    check('email', 'El correo no es válido').isEmail(),
], usersPost );

router.put( '/:id', usersPut );

router.patch( '/', usersPatch );

router.delete( '/', usersDelete );


module.exports = router;