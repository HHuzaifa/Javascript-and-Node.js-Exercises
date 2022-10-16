import PromptSync from "prompt-sync";
const prompt = PromptSync()


function describeCities(cityName, countryName = "pakistan") {
    let message = `${cityName} is in ${countryName}.`
    return message;
}

console.log(describeCities("karachi",));
console.log(describeCities("london", "england"));
console.log(describeCities("mumbai", "india"));