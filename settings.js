
document.querySelectorAll('.tab-item').forEach(tab => {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.tab-item').forEach(item => item.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));


    this.classList.add('active');
    document.getElementById(this.getAttribute('data-target')).classList.add('active');
  });
});


document.querySelectorAll('.show-password').forEach(button => {
  button.addEventListener('click', function () {
    let input = this.previousElementSibling;
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  });
});


function initMap() {
  const farmLocation = { lat: -17.8252, lng: 31.0335 }; // Coordinates for Harare, Zimbabwe
  const map = new google.maps.Map(document.getElementById('map-container'), {
    zoom: 12,
    center: farmLocation
  });

  const marker = new google.maps.Marker({
    position: farmLocation,
    map: map
  });
}


document.querySelector('[data-target="farm-info"]').addEventListener('click', function () {
  if (document.getElementById('map-container').childNodes.length === 0) {
    initMap();
  }
});


document.querySelector('.refresh-map').addEventListener('click', function (e) {
  e.preventDefault();
  initMap();
});
