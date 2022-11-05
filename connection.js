const mongoose = require('mongoose');
// const { options } = require('./routes/userRoutes');
require('dotenv').config();

// mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.en1qkou.mongodb.net/chatAppMern?retryWrites=true&w=majority`, () => {
    console.log('connected to mongodb');
});



