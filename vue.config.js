const mockdata = require('./mock.json');
module.exports = {
    baseUrl: './',
    devServer: {
        port: 8080,
        before(app) {
            app.get('/mock', (req, res, next) => {
                res.json(mockdata);
            })
        }
    }
}