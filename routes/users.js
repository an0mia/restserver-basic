const { Router } = require('express');
const { usersGet, usersPut, usersPost, usersPatch, usersDelete } = require('../controllers/users.controller');

const router = Router();

router.get( '/', usersGet );

router.post( '/', usersPost );

router.put( '/:id', usersPut );

router.patch( '/', usersPatch );

router.delete( '/', usersDelete );


module.exports = router;