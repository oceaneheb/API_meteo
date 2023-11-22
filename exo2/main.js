// Récupérer les 3 paragraphes HTML
let p_nom = document.getElementById("nom");
let img = document.querySelector("img");
let p_temperature = document.getElementById("temperature");

// Récupérer le bouton
const boutton = document.getElementById("bt");

boutton.addEventListener("click", () => {
    // récupérer la valeur saisie dans l'input (ville)
    const ville = document.getElementById("ville").value;
    console.log(ville);

    // Déclarer l'url de l'API avec un "let" car l'url change en fonction de la ville
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid=6f88826d767f323ad19cd282444924e9";

    // Appel de l'api
    const apiMeteo = fetch(url)
                        .then(async response => {
                            console.log(response);
                            // test si le code status == 404 (code erreur)
                            if (response.status === 404) {
                                p_nom.textContent = "La ville n'existe pas";
                                img.src = "";
                                p_temperature = ""
                            }
                            // afficher la météo de la ville (code valide)
                            if (response.status === 200) {
                                // récup du json
                                let json = await response.json();
                                // récup des valeurs (ville, temps et temp°)
                                const ville = json.name;
                                const temps = "https://openweathermap.org/img/wn/"+ json.weather[0].icon +"@2x.png";
                                const temperature = json.main.temp;
                                
                                // assigner aux éléments HTMLQ    
                                p_nom.textContent = "Ville : " + ville;
                                img.src = temps;
                                img.style.display = "block";
                                p_temperature.textContent = "Température : " + (temperature-273.15).toFixed(2);
                                
                            }
                        });
})

// Remplacer p_temp par une image
let image = document.createElement('img');
image.setAttribute('src', "https://openweathermap.org/img/wn/"+ json.weather[0].icon +"@2x.png");
image.style.display = "block";
body.replaceChild(image, body.firstChild.nextSibling);