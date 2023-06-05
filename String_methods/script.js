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

//The other string methods are substring and substr is same as slice but there are a bit difference

// String Methods. * String replace() method. * Case sensitive. -> Get a new string with replaced string
let string = 'Welcome to Microsoft'
let newText = string.replace('Microsoft', 'W3school')
document.getElementById('string').innerHTML = 'Text is: '+string
document.getElementById('stringReplace').innerHTML = 'Replaced text is: '+newText

// String Methods. * String replace() method. * Case insensitive using regular expression. -> Get a new string with replaced string
let newText2 = string.replace(/microsoft/i, 'W3school')
document.getElementById('stringReplaceInsensitive').innerHTML = 'Replaced text with case insensitive: '+newText2

// String Methods. * String replaceAll method. * ReplaceAll allows us to use regular expression instead of a string to be replaced -> Get a new string, replaced with all matches
let replaceAllText = 'I love cats. Cats are cute. Cats are very popular'
let replacedAllText = replaceAllText.replaceAll('cats', 'dogs')
 replacedAllText = replacedAllText.replaceAll('Cats', 'Dogs')
document.getElementById('stringReplaceAll').innerHTML = replacedAllText

// String Methods. * String toUpperCase() and toLowerCase methods. 
let defaultCase = 'Hi I am Fahim'
let upperCase = defaultCase.toUpperCase()
document.getElementById('defaultCase').innerHTML = defaultCase
document.getElementById('toUpperCase').innerHTML = upperCase

