let toBeLocations = ["usa", "england", "denmark", "norway", "france"]

//Making sure the array is in non alphabetic order
let copiedArray = toBeLocations.slice()
let nonAlphabetical = copiedArray.sort()
nonAlphabetical = nonAlphabetical.reverse()

//printing array in it's original order
console.log(toBeLocations)

//printing array in alphabetical order without modifing original array
console.log(copiedArray.sort())

//original array is as it was before in it's original state
console.log(toBeLocations)

//printing array in reverse alphabetical order without changing the original array
console.log(copiedArray.reverse())

//original state
console.log(toBeLocations)

//reversing the original order of list
console.log(toBeLocations.reverse())
//reversing the original array and setting it in it's original order
console.log(toBeLocations.reverse())

//sorting and printing original array in alphabetical order
console.log(toBeLocations.sort())
//setting the original sorted array in reversed order
console.log(toBeLocations.reverse())