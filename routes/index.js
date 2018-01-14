var userManager = require('../utilities/userManager');

exports.home = function (req, res) { 
    if (userManager.isAdmin(req.session)) {
        res.redirect('/dashboard');
    } else if (userManager.isUserLoggedIn(req.session)) {
        res.redirect('/questionnaire');
    } else {
        res.render('login.ejs');
    }
};
