module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 2 versions', 'iOS 7-10', 'not IE 10'],
            remove: false,
        })
    ],
};