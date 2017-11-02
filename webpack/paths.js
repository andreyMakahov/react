const path = require('path');
const config = require('../config');

module.exports = {
    dist: path.resolve(__dirname, '../dist'),
    src: path.resolve(__dirname, '../frontend'),
    public: config.public,
    nodeModules: path.resolve(__dirname, '../node_modules')
};