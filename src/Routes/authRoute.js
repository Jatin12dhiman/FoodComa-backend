const express = require('express');
const { login } = require('../controllers/authController');

// We have to initialise a router object to add routes in a new file
// Routers are used for segregating(alag-alag) yours routes in different modules 
const authRouter = express.Router();

authRouter.post('/login',login) //This is a route registration

module.exports = authRouter; // Exporting the router 