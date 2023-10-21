document.addEventListener("DOMContentLoaded", function () {
  const addTourBtn = document.querySelector(".addTour_btn");
  const modal = document.querySelector(".modal");
  const closeButton = document.querySelector(".close-modal");

  addTourBtn.addEventListener("click", () => {
    modal.classList.remove("hidden_model");
  });

  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden_model");
  });

  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    // e.preventDefault();

    const tourTitle = document.getElementById("tourTitle").value;
    const description = document.getElementById("description").value;
    const imageUrl = document.getElementById("imageUrl").value;
    const location = document.getElementById("location").value;
    const duration = document.getElementById("duration").value;
    const price = document.getElementById("price").value;
    const rating = document.getElementById("rating").value;

    const tourData = {
      title: tourTitle,
      description: description,
      img_url: imageUrl,
      location: location,
      duration: duration,
      price: price,
      ratings: rating,
    };

    try {
      const response = await axios.post("/tours", tourData);

      console.log("Server Response:", response.data);

      alert("Tour Added Successfully!!");
    } catch (error) {
      console.error("Error:", error);
    }

    console.log("Tour Title: " + tourTitle);
    console.log("Description: " + description);
    console.log("Image URL: " + imageUrl);
    console.log("Location: " + location);
    console.log("Duration: " + duration);
    console.log("Price: " + price);
    console.log("Rating: " + rating);

    // alert("Tour Added Successfully!!");

    document.getElementById("tourTitle").value = "";
    document.getElementById("description").value = "";
    document.getElementById("imageUrl").value = "";
    document.getElementById("location").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("price").value = "";
    document.getElementById("rating").value = "";

    modal.classList.add("hidden_model");
  });
});
