// // //FILENAME : db.js

// // const mongoose = require("mongoose");

// // mongoose.connect('mongodb+srv://shanmukhigatti:xmMB5SjQXQfeq3jF@cluster0.q04l1oa.mongodb.net/Cluster0?retryWrites=true&w=majority') 
// // .then(() => app.listen(5000)) 
// // .then(() => 
// // console.log("Connected to Database & Listining to localhost 5000") 
// // ) 
// // .catch((err) => console.log(err)); 

// // module.exports = InitiateMongoServer;
// const mongoose = require('mongoose');

// // Correct MongoDB URI with "mongodb://"
// const mongoURI = 'mongodb+srv://shanmukhigatti:xmMB5SjQXQfeq3jF@cluster0.q04l1oa.mongodb.net/Cluster0?retryWrites=true&w=majority';

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB successfully!');
// });
const mongoose = require('mongoose');

// Correct MongoDB URI with "mongodb+srv://"
const mongoURI = 'mongodb+srv://yogitharayapureddy:sTo0uoyCuid2d1sq@cluster0.zqwzfte.mongodb.net/Cluster0?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

module.exports = mongoose;

