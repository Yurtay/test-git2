function isPalindrome(str) {
  for (let  i= 0, j = str.length - 1; i < j; i++, j--) {
    if(str[i] != str[j])
    return console.log(false)
  }
  return console.log(true)
}

isPalindrome("racecar")
isPalindrome('programmer')

function isPalindrome2(str) {
  return console.log(str == str.split('').reverse().join('')) //разделили строку на массив, развернули её, собрали обратно в строку
}

isPalindrome2("racecar")
isPalindrome2('programmer')


console.log('making changes in the code')
console.log('What a beatiful day!')