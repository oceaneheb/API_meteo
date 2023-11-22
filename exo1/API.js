let url = "https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=6f88826d767f323ad19cd282444924e9";

const apiMeteo = fetch(url)
                    .then(async response => {
                        console.log(response);
                        const json = await response.json();
                        console.log(json); 
                        const temperature = json.main.temp;
                        const ville = json.name;
                        const lat = json.coord.lat;
                        const long = json.coord.lon;
                        const img = json.weather.icon
                        // console.log(temperature, ville, lat, long);

    const div = document.querySelector('div');
    const p1 = document.createElement('p');
    p1.textContent = "Température : " + (temperature - 273,15) + " degrés";
    const p2 = document.createElement('p')
    p2.textContent = "Ville : " + ville;
    const p3 = document.createElement('p')
    p3.textContent = "Latitude : " + lat;
    const p4 = document.createElement('p')
    p4.textContent = "Longitude : " + long;

    let info = [];
    info.push(p1,p2,p3,p4)
    for (let valeur of info) {
        div.appendChild(valeur);
    }

    // Remplacer p1 par l'icon du temps
    const image = document.createElement('img');
    image.setAttribute('src', "https://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png");
    div.replaceChild(image, p1);
    image.style.display = "block"; //img est de type inline > convertir en block pour affichage en dessous
});



