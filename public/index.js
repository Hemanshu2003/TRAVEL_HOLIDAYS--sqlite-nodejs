const getTours = async () => {
  const data = await axios.get('/tours');
  console.log(data.data.tours);
  renderCards(data.data.tours);
};

const deleteTour = async (tourId) => {
  const userConfirmed = confirm('Are you sure you want to delete this tour?');

  if (userConfirmed) {
    try {
      const response = await axios.delete(`/tours/${tourId}`);
      console.log(`Tour with ID ${tourId} has been deleted.`);
    } catch (error) {
      console.error(`Error while deleting tour: ${error.message}`);
    }
  }
};

const renderCards = (cardDataFromBackend) => {
  const cardContainer = document.getElementById('cardContainer');

  cardDataFromBackend.forEach((data) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="card__header">
        <div class="card__picture">
          <img class="card__picture-img" src="${data.img_url}" alt="Tour" />
        </div>
        <div class="rating">
                <p class="card__ratings">
                  <span class="card__footer-value rating_text">${data.ratings} / 10</span>
                  <svg
                    class="rating_icon"
                    style="margin-right: 0"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    width="256"
                    height="256"
                    viewBox="0 0 256 256"
                    xml:space="preserve"
                  >
                    <defs></defs>
                    <g
                      style="
                        stroke: none;
                        stroke-width: 0;
                        stroke-dasharray: none;
                        stroke-linecap: butt;
                        stroke-linejoin: miter;
                        stroke-miterlimit: 10;
                        fill: none;
                        fill-rule: nonzero;
                        opacity: 1;
                      "
                      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                    >
                      <path
                        d="M 45 2.024 C 45 2.024 45 2.024 45 2.024 c -1.398 0 -2.649 0.778 -3.268 2.031 L 29.959 27.911 c -0.099 0.2 -0.29 0.338 -0.51 0.37 L 3.122 32.107 c -1.383 0.201 -2.509 1.151 -2.941 2.48 c -0.432 1.329 -0.079 2.76 0.922 3.736 l 19.049 18.569 c 0.16 0.156 0.233 0.38 0.195 0.599 L 15.85 83.71 c -0.236 1.377 0.319 2.743 1.449 3.564 c 1.129 0.821 2.6 0.927 3.839 0.279 l 23.547 -12.381 c 0.098 -0.051 0.206 -0.077 0.314 -0.077 C 51.721 53.905 50.301 28.878 45 2.024 z"
                        style="
                          stroke: none;
                          stroke-width: 1;
                          stroke-dasharray: none;
                          stroke-linecap: butt;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 10;
                          fill: rgb(255, 200, 80);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                      />
                      <path
                        d="M 45 2.024 C 45 2.024 45 2.024 45 2.024 c 1.398 0 2.649 0.778 3.268 2.031 l 11.773 23.856 c 0.099 0.2 0.29 0.338 0.51 0.37 l 26.326 3.826 c 1.383 0.201 2.509 1.151 2.941 2.48 c 0.432 1.329 0.079 2.76 -0.922 3.736 L 69.847 56.892 c -0.16 0.156 -0.233 0.38 -0.195 0.599 L 74.15 83.71 c 0.236 1.377 -0.319 2.743 -1.449 3.564 c -1.129 0.821 -2.6 0.927 -3.839 0.279 L 45.315 75.172 c -0.098 -0.051 -0.206 -0.077 -0.314 -0.077 C 37.08 54.593 38.849 29.395 45 2.024 z"
                        style="
                          stroke: none;
                          stroke-width: 1;
                          stroke-dasharray: none;
                          stroke-linecap: butt;
                          stroke-linejoin: miter;
                          stroke-miterlimit: 10;
                          fill: rgb(255, 220, 100);
                          fill-rule: nonzero;
                          opacity: 1;
                        "
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                      />
                    </g>
                  </svg>
                </p>
              </div>
      </div>
      <div class="card__details">
        <h4 class="card__sub-heading">${data.title}</h4>
        <p class="card__text">${data.description}</p>
        <div class="card__data-container">
          <div class="card__data">
            <svg class="card__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
            </svg>
            <span>${data.location}</span>
          </div>
          <div class="card__data">
          <svg class="card__icon2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

          <defs>
          </defs>
          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
            <path d="M 65.122 13.164 H 24.877 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 40.245 c 1.104 0 2 0.896 2 2 S 66.227 13.164 65.122 13.164 z" style="stroke: none; stroke-width: 2; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0, 125, 123); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 88 30.453 H 2 c -1.104 0 -2 -0.896 -2 -2 v -9.082 C 0 13.743 4.579 9.164 10.207 9.164 h 6.55 c 1.104 0 2 0.896 2 2 s -0.896 2 -2 2 h -6.55 C 6.785 13.164 4 15.949 4 19.371 v 7.082 h 82 v -7.082 c 0 -3.422 -2.784 -6.207 -6.207 -6.207 h -6.55 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 6.55 C 85.421 9.164 90 13.743 90 19.371 v 9.082 C 90 29.557 89.104 30.453 88 30.453 z" style="stroke: none; stroke-width: 2; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0, 125, 123); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 47.932 89.102 H 10.207 C 4.579 89.102 0 84.522 0 78.895 V 28.453 c 0 -1.104 0.896 -2 2 -2 h 86 c 1.104 0 2 0.896 2 2 v 19.712 c 0 1.104 -0.896 2 -2 2 s -2 -0.896 -2 -2 V 30.453 H 4 v 48.442 c 0 3.423 2.785 6.207 6.207 6.207 h 37.725 c 1.104 0 2 0.896 2 2 S 49.036 89.102 47.932 89.102 z" style="stroke: none; stroke-width: 2; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0, 125, 123); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 23.255 53.637 h -4.876 c -2.577 0 -4.674 -2.097 -4.674 -4.674 v -4.875 c 0 -2.577 2.097 -4.674 4.674 -4.674 h 4.876 c 2.577 0 4.673 2.097 4.673 4.674 v 4.875 C 27.929 51.54 25.832 53.637 23.255 53.637 z M 18.379 43.414 c -0.372 0 -0.674 0.302 -0.674 0.674 v 4.875 c 0 0.371 0.302 0.674 0.674 0.674 h 4.876 c 0.371 0 0.673 -0.303 0.673 -0.674 v -4.875 c 0 -0.372 -0.302 -0.674 -0.673 -0.674 H 18.379 z" style="stroke: none; stroke-width: 2; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0, 125, 123); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 47.438 53.637 h -4.875 c -2.577 0 -4.674 -2.097 -4.674 -4.674 v -4.875 c 0 -2.577 2.097 -4.674 4.674 -4.674 h 4.875 c 2.577 0 4.674 2.097 4.674 4.674 v 4.875 C 52.111 51.54 50.015 53.637 47.438 53.637 z M 42.562 43.414 c -0.372 0 -0.674 0.302 -0.674 0.674 v 4.875 c 0 0.371 0.302 0.674 0.674 0.674 h 4.875 c 0.371 0 0.674 -0.303 0.674 -0.674 v -4.875 c 0 -0.372 -0.303 -0.674 -0.674 -0.674 H 42.562 z" style="stroke: none; stroke-width: 2; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0, 125, 123); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 23.255 74.665 h -4.876 c -2.577 0 -4.674 -2.097 -4.674 -4.674 v -4.875 c 0 -2.577 2.097 -4.674 4.674 -4.674 h 4.876 c 2.577 0 4.673 2.097 4.673 4.674 v 4.875 C 27.929 72.568 25.832 74.665 23.255 74.665 z M 18.379 64.442 c -0.372 0 -0.674 0.303 -0.674 0.674 v 4.875 c 0 0.371 0.302 0.674 0.674 0.674 h 4.876 c 0.371 0 0.673 -0.303 0.673 -0.674 v -4.875 c 0 -0.371 -0.302 -0.674 -0.673 -0.674 H 18.379 z" style="stroke: none; stroke-width: 2; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0, 125, 123); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 22.204 21.43 h -2.773 c -2.577 0 -4.674 -2.097 -4.674 -4.673 V 5.572 c 0 -2.577 2.097 -4.674 4.674 -4.674 h 2.773 c 2.577 0 4.674 2.097 4.674 4.674 v 11.185 C 26.877 19.333 24.781 21.43 22.204 21.43 z M 19.431 4.898 c -0.372 0 -0.674 0.302 -0.674 0.674 v 11.185 c 0 0.371 0.302 0.673 0.674 0.673 h 2.773 c 0.372 0 0.674 -0.302 0.674 -0.673 V 5.572 c 0 -0.372 -0.302 -0.674 -0.674 -0.674 H 19.431 z" style="stroke: none; stroke-width: 2; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0, 125, 123); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 70.569 21.43 h -2.773 c -2.577 0 -4.674 -2.097 -4.674 -4.673 V 5.572 c 0 -2.577 2.097 -4.674 4.674 -4.674 h 2.773 c 2.577 0 4.674 2.097 4.674 4.674 v 11.185 C 75.243 19.333 73.146 21.43 70.569 21.43 z M 67.796 4.898 c -0.371 0 -0.674 0.302 -0.674 0.674 v 11.185 c 0 0.371 0.303 0.673 0.674 0.673 h 2.773 c 0.371 0 0.674 -0.302 0.674 -0.673 V 5.572 c 0 -0.372 -0.303 -0.674 -0.674 -0.674 H 67.796 z" style="stroke: none; stroke-width: 2; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0, 125, 123); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 70.268 89.102 c -10.881 0 -19.732 -8.852 -19.732 -19.732 s 8.852 -19.732 19.732 -19.732 S 90 58.488 90 69.369 S 81.148 89.102 70.268 89.102 z M 70.268 53.637 c -8.675 0 -15.732 7.058 -15.732 15.732 s 7.058 15.732 15.732 15.732 S 86 78.044 86 69.369 S 78.942 53.637 70.268 53.637 z" style="stroke: none; stroke-width: 2; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0, 125, 123); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
            <path d="M 77.202 77.956 c -0.495 0 -0.99 -0.183 -1.377 -0.55 l -6.935 -6.587 c -0.398 -0.378 -0.623 -0.902 -0.623 -1.45 v -9.641 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 8.782 l 6.312 5.995 c 0.802 0.761 0.834 2.026 0.073 2.827 C 78.259 77.747 77.73 77.956 77.202 77.956 z" style="stroke: none; stroke-width: 2; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0, 125, 123); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          </g>
          </svg>
                  <span>${data.duration}</span>
          </div>
        </div>
      </div>
      <div class="card__footer">
              <p>
                <span class="card__footer-value">₹${data.price}</span>
                <span class="card__footer-text">per person</span>
                <span class="delete-icon" data-tour-id="${data.ID}"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34" height="34" viewBox="0,0,256,256"
                style="fill:#000000;">
                <g fill="#ff0000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(10.66667,10.66667)"><path d="M10,2l-1,1h-6v2h18v-2h-6l-1,-1zM4.36523,7l1.70313,15h11.86328l1.70313,-15z"></path></g></g>
                </svg></span>
              </p>
              <a href="/tour?id=${data.ID}" class="edit__logo"> <img id="edit__logo" src="./edit-svgrepo-com.svg" /> </a>
              <a class="btn btn--green btn--small" href="#">DETAILS</a>
            </div>`;

    const deleteIcon = card.querySelector('.delete-icon');
    deleteIcon.addEventListener('click', () => {
      const tourId = deleteIcon.getAttribute('data-tour-id');
      deleteTour(tourId);
      card.remove();
    });

    cardContainer.appendChild(card);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  getTours();
});
