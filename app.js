
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/UserPostDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userRoutes = require('./routes/UserRoute');
const postRoutes = require('./routes/Postroute');

app.use('/api', userRoutes);
app.use('/api', postRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
