const ps = require("prompt-sync")
function describeCities(cityName, CountryName = "Pakistan") {
    cityName = prompt("Give the name of your city.")
    CountryName = prompt("Give the name of your country.")
    console.log(`${describeCities} ${CountryName}`)
}
describeCities()