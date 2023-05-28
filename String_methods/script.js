// String Methods. * String length property. -> Get string length
{let text = 'Apple, Banana, Kiwi'
document.getElementById('length').innerHTML = 'Length: ' +text.length}

// String Methods. * String slice() method. -> Get sliced or extracted string. * 1 extracting method of 3 methods
let text = 'Apple, Banana, Kiwi'
let part = text.slice(7,13) //Slice has 2 params
document.getElementById('sliceWith2Params').innerHTML = 'Sliced string: ' +part

let part2 = text.slice(7) // If 1 param, the  methods will slice out the rest of the string
document.getElementById('sliceWith1Param').innerHTML = 'Sliced string: '+part2

let part3 = text.slice(-12)
document.getElementById('sliceWithNegativeParam').innerHTML = part3

let part4 =text.slice(-12, -6)
document.getElementById('sliceWithNegative2Params').innerHTML =part4


