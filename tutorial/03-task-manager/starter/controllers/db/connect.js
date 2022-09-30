const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://GrigoriSchneider:V9AMvRJR05Tw5tBd@nodeexpressprojects.5oy4d6g.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority';

const connectDB = (url) => {
  return;
};

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

module.exports = connectDB;
