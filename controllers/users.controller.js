const { response } = require('express');

//GET
const usersGet = ( req, res ) => {

    const { nick = '', page = 1 } = req.query;

    res.status(200).json({
        msg: 'get API - controller',
        nick,
        page
    });
}

//POST
const usersPost = ( req, res ) => {

    const { nombre, edad } = req.body;

    res.status(200).json({
        msg: 'post API - controller',
        nombre,
        edad
    });
}

//PUT
const usersPut = ( req, res ) => {

    const { id } = req.params;

    res.status(200).json({
        msg: 'put API - controller',
        id
    });
}

//PATCH
const usersPatch = ( req, res ) => {
    res.status(200).json({
        msg: 'patch API - controller'
    });
}

//DELETE
const usersDelete = ( req, res ) => {
    res.status(500).json({
        msg: 'delete API - controller'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
    
}