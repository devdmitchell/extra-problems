function isEvenlyDivisible(num1, num2) {
return num1 % num2 === 0;
}

function halfSquare(num) {
  return (num * num) / 2
}

function isLong(str) {
  return str.length >= 15;
}

function exclaim(str) {
  if (str.charAt(str.length - 1) === '!') {
      while (str.charAt(str.length - 1) === '!') {
          str = str.slice(0, -1);
      }
      return str + '!';
  } else {
      return str + '!'; 
  }
}

function countWords(str) {
  if (!str) return 0; 
  return str.trim().split(/\s+/).length; 
}

function containsDigit(str) {
  for (let i = 0; i < str.length; i++) {
      if (str[i] >= '0' && str[i] <= '9') {
          return true; 
      }
  }
  return false; 
}

function containsLowerCase(str) {
  for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'a' && str[i] <= 'z') {
          return true; 
      }
  }
  return false; 
}

function containsUpperCase(str) {
  for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
          return true; 
      }
  }
  return false; 
}

function containsNonAlphanumeric() {
}

function containsSpace() {
}

function digits() {
}

function truncate() {
}

function isValidPassword() {
}

function onlyPunchy(arr) {
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
