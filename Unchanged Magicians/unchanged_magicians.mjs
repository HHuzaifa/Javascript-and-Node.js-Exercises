function showMNames(namesList) {
    for ( let i = 0; i < namesList.length; i++) {
        console.log(namesList[i])
    }
    }
    
var magiciansNames = ["elliot", "james", "howlet", "stacy", "ruvenald"];
//showMNames(magiciansNames);


function makeGreat(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = `The great ${array[i]}`
    }return array
}

//showMNames(makeGreat(magiciansNames))

var magiciansNames2 = makeGreat(magiciansNames.slice())

showMNames(magiciansNames)
showMNames(magiciansNames2)