const express = require('express');
const db = require('./connectDB');
const tour = require('./routes/tours');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static('./public'));
app.use(express.json());

app.use('/tours', tour);
app.get('/:id', (req, res) => {
  res.sendFile(__dirname + '/public' + '/updateTour.html');
});

const PORT = process.env.PORT || 3000;

const run = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Listening to port : ${PORT} `);
    });
  } catch (error) {
    console.log(error);
  }
};

run();
