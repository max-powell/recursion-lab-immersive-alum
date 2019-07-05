// Code your solution here!

function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    const substring = string.substring(1)
    printString(substring)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string < 2) {
    return string
  } else {
    return (reverseString(string.slice(1)) + string[0])
  }
}

function isPalindrome(string) {
  if (string.length < 2) {
    return true
  } else if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1,-1))
  } else {
    return false
  }
}

function addUpTo (array, index) {
  if (index === 0) {
    return array[index]
  } else {
    return array[index] + addUpTo(array, --index)
  }
}

function maxOf (array) {
  if (array.length === 1) {
    return array[0]
  } else {
    return array[0] > array[1]
    ? maxOf([array[0]].concat(array.slice(2)))
    : maxOf(array.slice(1))
  }
}

function includesNumber (array, e) {
  if (array[0] === e) {
    return true
  } else if (array.length > 1) {
    return includesNumber(array.slice(1), e)
  } else {
    return false
  }
}
