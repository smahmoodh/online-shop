const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('../model/user');
const fs = require('fs');
const path = require('path');
// const { getUserId } = require('./utils');
const { MONGODB, PORT } = require("./config");


// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(MONGODB, {
    // useMongoClient: true
});

const resolvers = {
    Query,
    Mutation,
};

const server = new ApolloServer({
    typeDefs: fs.readFileSync(
        path.join(__dirname, 'schema.graphql'),
        'utf8'
    ),
    resolvers,
    introspection: true,
    playground: true,
    context:
         ({ req }) => {
            const secret_key = 's6d4f56%D1sd6@*@65fesdhn#';
            const hToken = req.headers["token"];
            // console.log(hToken);
            let check = User.checkToken(hToken, secret_key);
            return {
                ...req,
                check,
                secret_key
            }
        },
});

const port = process.env.PORT || PORT ;

// server.listen(port, () => console.log(`Listening on ${port}`));
server
    .listen(port)
    .then(({ url }) =>
        console.log(`Server is running on ${url}`)
    );

// server
//   .listen()
//   .then(({url}) =>
//     console.log(`Server is running on ${url}`)
//   );
