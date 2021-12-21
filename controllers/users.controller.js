const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const User = require('../models/user');

//GET
const usersGet = ( req, res ) => {

    const body = req.body;

    res.status(200).json({
        msg: 'get API - controller',
        body
    });
}

//POST
const usersPost = async( req, res ) => {

    const errors = validationResult(req);
    if ( !errors.isEmpty() ) {
        return res.status(400).json(errors);
    }

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    //verificar si el correo existe
    const existEmail = await User.findOne({ email });
    if ( existEmail ) {
        return res.status(400).json({
            error: 'El correo ya está registrado'
        });
    }

    //encriptar contraseña
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync( password, salt );
    
    //guardar en base de datos
    await user.save();

    res.status(200).json({
        msg: 'post API - controller',
        user
    });
}

//PUT
const usersPut = ( req, res ) => {

    const body = req.body;

    res.status(200).json({
        msg: 'put API - controller',
        body
    });
}

//PATCH
const usersPatch = ( req, res ) => {

    const body = req.body;

    res.status(200).json({
        msg: 'patch API - controller',
        body
    });
}

//DELETE
const usersDelete = ( req, res ) => {

    const body = req.body;

    res.status(500).json({
        msg: 'delete API - controller',
        body
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
    
}