var path = require('path');

var settings = {
    path: path.normalize(path.join(__dirname, '..')),
    port: process.env.NODE_PORT || 3000,
    saltLength: 16,
    questionType: {
        text: 1,
        yesNo: 2,
        singleChoice: 3,
        multipleChoice: 4
    },
    database: {
        protocol: "mysql",
        query: { pool: true },
        host: "localhost",
        database: "questionnaire",
        user: "root",
        password: ""
    }
};

module.exports = settings;