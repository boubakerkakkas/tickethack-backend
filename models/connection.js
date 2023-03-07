const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://boubakerkks:ctd9IDeojnpQSzz7@cluster0.v8svwcc.mongodb.net/tickethack'

mongoose.connect(connectionString, {connectTimeoutMS : 2000})
.then(() => console.log('Database connected'))
.catch(error => console.error(error));