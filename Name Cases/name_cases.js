let personName = "huzaifa khan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());

//A function to display a string in Title Case

function titCase(str) {
    let title_word = str.toLowerCase().split(" ").map(function(elem){
        return elem[0].toUpperCase() + elem.slice(1);
    })
return title_word.join(" ");
}

console.log(titCase(personName))