import PromptSync from "prompt-sync";
const prompt = PromptSync()

function describeCities(cityName, CountryName = "Pakistan") {
    cityName = prompt("Give the name of your city.")
    CountryName = prompt("Give the name of your country.")
    console.log(`${cityName} ${CountryName}`)
}
describeCities()