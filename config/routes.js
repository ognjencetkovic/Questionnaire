var index = require('../routes');
var user = require('../routes/user');
var questionnaire = require('../routes/questionnaire');
var dashboard = require('../routes/dashboard');

module.exports = function (app) {
    app.get('/', index.home);
    
    app.get('/register', user.register);
    app.post('/register', user.register);
    app.get('/login', user.login);
    app.post('/login', user.login);
    app.get('/logout', user.logout);
    
    app.get('/questionnaire', questionnaire.getList);
    app.get('/questionnaire/:id', questionnaire.get);
    app.post('/questionnaire/:id', questionnaire.create);
    
    app.get('/dashboard', dashboard.getList);
    app.get('/dashboard/questionnaire', dashboard.get);
    app.post('/dashboard/questionnaire', dashboard.create);
    app.get('/dashboard/questionnaire/:id', dashboard.get);
    app.post('/dashboard/questionnaire/:id', dashboard.create);
    app.delete('/dashboard/questionnaire/:id', dashboard.delete);
    
    app.get('/401', index.show401);
    app.get('/404', index.show404);
    app.get('*', index.show404);
    
};
