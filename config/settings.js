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
        host: "us-cdbr-iron-east-05.cleardb.net",
        database: "heroku_22bdbbb01f96172",
        user: "b254c546f4b6b6",
        password: "40a316d4"
    }
};

module.exports = settings;