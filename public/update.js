const getTourID = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const TOUR_ID = +urlParams.get('id');
  return TOUR_ID;
};

const getATour = async () => {
  console.log(getTourID());
  const tour = await axios.get(`/tours/${getTourID()}`);
  console.log(tour.data.tours[0]);
};
getATour();

const UpdateTour = async () => {
  await axios.patch(`/tours/${getTourID}`, {
    // form ka data update krne ke liye hona
  });
};
