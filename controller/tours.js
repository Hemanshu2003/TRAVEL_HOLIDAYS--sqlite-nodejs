const asyncWrapper = require('../middleware/async');
const db = require('../connectDB');

const getAllTour = asyncWrapper(async (req, res) => {
  const allTours = `SELECT * FROM TOURS`;
  db.all(allTours, (err, tours) => {
    if (err) console.log(err);
    else res.status(200).json({ tours });
  });
});
const getATour = asyncWrapper(async (req, res) => {
  const { id: TOUR_ID } = req.params;
  const TOUR = `SELECT * FROM TOURS WHERE ID = ${TOUR_ID}`;
  db.all(TOUR, (err, tours) => {
    if (err) console.log(err);
    else res.status(200).json({ tours });
  });
});

const createTour = asyncWrapper(async (req, res) => {
  // {
  //   "title": "Historical Walking Tour",
  //   "img_url": "https://example.com/historical_walking_tour.jpg",
  //   "price": "$39.99",
  //   "duration": "2.5 hours",
  //   "location": "London, UK",
  //   "description": "Step back in time and explore the rich history of London with our expert guides. Visit iconic sites and learn about the city's fascinating past."
  // }

  const { title, img_url, price, duration, location, description, ratings } =
    req.body;
  console.log(req.body);

  const SQL = `insert into TOURS(title ,img_url ,price,duration,location ,description, ratings) VALUES ('${title}' , '${img_url}' , '${price}' , '${duration}', '${location}','${description}', '${ratings}')`;
  db.run(SQL);

  res.status(201).json({
    title,
    img_url,
    price,
    duration,
    location,
    description,
    ratings,
  });
});

const deleteTour = asyncWrapper(async (req, res) => {
  const { id: TOUR_ID } = req.params;

  const SQL = `DELETE From TOURS where ID = ${TOUR_ID}`;

  db.run(SQL);

  res.status(200).json({
    message: 'successfully deleted',
  });
});

const updateTour = asyncWrapper(async (req, res) => {
  const { id: TOUR_ID } = req.params;
  const { title, img_url, price, duration, location, description, ratings } =
    req.body;
  console.log(req.body);

  const SQL = `UPDATE TOURS SET title = '${title}' , img_url = '${img_url}' , price = '${price}ß' , duration = '${duration}', location = '${location}' , description = '${description}' , ratings = '${ratings}'  where ID = ${TOUR_ID}`;

  db.run(SQL);

  res.status(200).json({
    message: 'successfully Updated!',
  });
});

module.exports = { getAllTour, createTour, deleteTour, updateTour, getATour };
