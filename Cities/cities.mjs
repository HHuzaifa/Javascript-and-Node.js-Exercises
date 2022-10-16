import PromptSync from "prompt-sync";
const prompt = PromptSync()


function describeCities(cityName = prompt("What's your city name?"), 
countryName = prompt("What's your country name?") || "pakistan") {
    let message = `${cityName} is in ${countryName}.`
    return message;
}

console.log(describeCities())