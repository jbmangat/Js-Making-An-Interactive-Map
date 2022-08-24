// writing out the solution to practice 
const myMap = {
    coordinates: [],
    businesses: [],
    map: {},
    markers: {},

    buildMap(){
        this.map = L.map('map', {
            center: this.coordinates,
            zoom: 11,
        });
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 15,
            attribution: '© OpenStreetMap'
        }).addTo(this.map);
        const marker = L.marker(this.coordinates)
        marker
        .addTo(this.map)
        .bindPopup('<b>You are here</b>')
        .openPopup()
    },
}
async function getCoords(){
    const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    });
    return [pos.coords.latitude, pos.coords.longitude]
}

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

// const places = [coffee, hotel, restaurant, grocery, tacoTruck]

window.onload = async () => {
    const coords = await getCoords()
    console.log(coords)
    myMap.coordinates = coords
    myMap.buildMap()
}
document.getElementById('submit').addEventListener('click', async (event) => {
    event.preventDefault()
    let business = document.getElementById('business').value
    console.log(business)
})



