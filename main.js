

 const mymap = L.map('mapid').setView([0, 0], 1);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const tiles = L.tileLayer(tileUrl,{attribution})
tiles.addTo(mymap)



let url_iss = "https://api.wheretheiss.at/v1/satellites/25544"
async function getIss(){
    const responze = await fetch(url_iss)
    const data = await responze.json()
    console.log(data)
    const{ latitude , longitude }=data
    document.getElementById("lat").textContent = latitude
    document.getElementById("lot").textContent = longitude
}
getIss()