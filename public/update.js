const form1 = document.querySelector('.form1');
const imgPreview = document.getElementById('img__preview');
let TOUR_DATA;
const getTourID = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const TOUR_ID = +urlParams.get('id');
  return TOUR_ID;
};

const getATourAndUpdateForm = async () => {
  try {
    const tour = await axios.get(`/tours/${getTourID()}`);
    const locations = document.getElementById('location');
    TOUR_DATA = tour.data.tours[0];
    console.log(TOUR_DATA);

    tourTitle.value = TOUR_DATA.title;
    description.value = TOUR_DATA.description;
    imageUrl.value = TOUR_DATA.img_url;
    duration.value = TOUR_DATA.duration;
    imgPreview.src = TOUR_DATA.img_url;
    locations.value = TOUR_DATA.location;
    price.value = TOUR_DATA.price;
    rating.value = TOUR_DATA.ratings;
  } catch (error) {
    console.log(error.message);
  }
};

const setAllFields = () => {};

document.addEventListener('DOMContentLoaded', async function () {
  getATourAndUpdateForm();

  imageUrl.addEventListener('input', function () {
    console.log(imgPreview);
    imgPreview.src = imageUrl.value;
  });

  form1.addEventListener('submit', async function (e) {
    e.preventDefault();
    const tourTitle = document.getElementById('tourTitle').value;
    const description = document.getElementById('description').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const location = document.getElementById('location').value;
    const duration = document.getElementById('duration').value;
    const price = document.getElementById('price').value;
    const rating = document.getElementById('rating').value;

    const tourData = {
      title: tourTitle,
      description: description,
      img_url: imageUrl,
      location: location,
      duration: duration,
      price: price,
      ratings: rating,
      ID: getTourID(),
    };

    console.log(getTourID());

    try {
      await axios.patch(`/tours/${getTourID()}`, tourData);
      alert('Tour Updated Successfully!!');
      window.location.href = 'http://localhost:3000/';
    } catch (error) {
      console.log(error.message);
    }
  });
});
