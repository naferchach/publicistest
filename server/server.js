const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema/TypeDefs');
const { mocks } = require('./schema/Mocks');
const cors = require('cors');
const session = require('express-session');

const app = express();

var allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5000',
    'https://publicistest.herokuapp.com/',
];
app.use(
    cors({
        origin: function (origin, callback) {
            // allow requests with no origin
            // (like mobile apps or curl requests)
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg =
                    'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.';
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
    })
);

const server = new ApolloServer({ typeDefs, mocks });
server.applyMiddleware({ app });

app.use(
    session({
        secret: 'my-secret',
        resave: true,
        saveUninitialized: true,
        cookie: {
            httpOnly: false,
        },
    })
);

app.use(function (req, res, next) {
    res.setHeader('Content-Security-Policy', "script-src 'self';");
    next();
});

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Graphql Server started on: http://localhost:${port}`);
});
