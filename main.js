//Vytvorenie mapy
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const mymap = L.map('mapid').setView([0, 0], 1);
const tiles = L.tileLayer(tileUrl,{attribution})
tiles.addTo(mymap)
//Vytvorenie icony iss
const issIcon = L.icon({
    iconUrl: 'iss200.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16]
    
});
const marker = L.marker([0, 0],{icon:issIcon}).addTo(mymap)








let url_iss = "https://api.wheretheiss.at/v1/satellites/25544"

let firsTime = true
async function getIss(){
    const responze = await fetch(url_iss)
    const data = await responze.json()
    console.log(data)
    const{ latitude , longitude }=data
    //pridanie značky na mapu na pozíciu
    // L.marker([latitude, longitude]).addTo(mymap)
    marker.setLatLng([latitude,longitude])
    // nastavenie stredu mapy na ISS + zoom
    if(firsTime){
        mymap.setView([latitude,longitude],4)
        firsTime = false

    }
   
    document.getElementById("lat").textContent = latitude.toFixed(2)
    document.getElementById("lot").textContent = longitude.toFixed(2)
}
getIss()

setInterval(getIss,1000)
