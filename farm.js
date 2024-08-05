document.addEventListener('DOMContentLoaded', () => {

  const mapOptions = {
    center: new google.maps.LatLng(-18.972013, 25.065699),
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  const map = new google.maps.Map(document.getElementById('map'), mapOptions);


  const searchBox = document.querySelector('.search-bar');
  const autocomplete = new google.maps.places.Autocomplete(searchBox);

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete.getPlace();

    if (place.geometry) {
      map.setCenter(place.geometry.location);
      map.setZoom(15);
    } else {
      searchBox.value = '';
    }
  });


  document.getElementById('cancelButton').addEventListener('click', function () {
    window.location.href = 'farm.html';
  });

  document.getElementById('addButton').addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'dashboard.html';
  });
});
