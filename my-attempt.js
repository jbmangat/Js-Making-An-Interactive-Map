
// my attempt at the assignment

// map setup
const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// a marker
// const marker = L.marker([51.5, -0.09]).addTo(map);

// get user location from leaflet plugin
L.control.locate().addTo(map);

// search for nearby restaurants? from foursquare
document.getElementsByClassName('submit').addEventListener('click', function(){
    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'fsq3KkhbmNTg09yiV9Jd0YRge4/8f1IT8xXmWEYSpFMscm8= '
        }
      };
      
      fetch('https://api.foursquare.com/v3/places/search?query=placeType&limit=5', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
})

// ask for business type from user
// function getBusiness(){
//     let businessType = prompt('What type of business are you looking for?');
//     if(businessType != null){
//         console.log("Thank you!")
//     }
// } 
