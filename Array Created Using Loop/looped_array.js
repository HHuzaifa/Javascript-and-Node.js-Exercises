condition = true
let favLanguages = [];
while (true) {
    currentLanguage = prompt("What is your favourite programming language\nEnter 'q' to quit the program.");
    if (currentLanguage == "q".toLowerCase()) {
        break
    };
    favLanguages.push(currentLanguage);
}
console.log(favLanguages);

