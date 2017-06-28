module.exports = function (obj) {
  var keys = Object.keys(obj);
  seed = getHashCode(obj);
  for (j=0; j < keys.length; j++) {
    console.log(obj[keys[j]]);
    console.log(typeof obj[keys[j]]);
    if (typeof obj[keys[j]] === 'boolean') {;
      obj[keys[j]] = ConvertBoolean(obj[keys[j]]);
    } else if (typeof obj[keys[j]] === 'number') {;
      obj[keys[j]] = ConvertNumber(obj[keys[j]]);
    } else if (typeof obj[keys[j]] === 'string') {;
      obj[keys[j]] = ConvertString(obj[keys[j]]);
    }
  }
  return obj;
}

function ConvertBoolean(data) {
  return !data;
}

function ConvertNumber(data) {
  var digits = data.toString().length;
  var retval = '';
  for (i = 0; i < digits; i++) {
    var obfuscatedDigit = data.toString()[i];
    // if number is greater than one digit than the first digit cant be zero
    while(obfuscatedDigit == data.toString()[i] || (digits > 1 && obfuscatedDigit == 0 && i == 0)) {
      obfuscatedDigit = Math.floor(random() * 10);
    }
    retval += obfuscatedDigit;
  }
  return parseInt(retval);
}

// obfuscates alpha and digits, and passes anything else thru
function ConvertString(data) {
  var len = data.length;
  var lowerVowel = 'aeiou';
  var lowerConsonant = 'bcdfghjklmnpqrstvwxyz';
  var upperVowel = 'AEIOU';
  var upperConsonant = 'BCDFGHJKLMNPQRSTVWXYZ';
  var digitAlpha = '0123456789';
  var retval = '';
  for (i = 0; i < len; i++) {
    var obfuscatedDigit = data[i];
    while((isLowerVowel(data[i]) || isLowerConsonant(data[i]) || isUpperVowel(data[i]) || isUpperConsonant(data[i]) || isDigitLetter(data[i]))
          && obfuscatedDigit == data[i]) {
      if (isLowerVowel(data[i])) {
        obfuscatedDigit = lowerVowel[Math.floor(random() * 5)];
      } else if (isLowerConsonant(data[i])) {
        obfuscatedDigit = lowerConsonant[Math.floor(random() * 21)];
      } else if (isUpperVowel(data[i])) {
        obfuscatedDigit = upperVowel[Math.floor(random() * 5)];
      } else if (isUpperConsonant(data[i])) {
        obfuscatedDigit = upperConsonant[Math.floor(random() * 21)];
      } else if (isDigitLetter(data[i])) {
        obfuscatedDigit = digitAlpha[Math.floor(random() * 10)];
      } else {
        obfuscatedDigit = data[i];
      }
    }
    retval += obfuscatedDigit;
  }
  return retval;
}

function isLowerVowel(str) {
  return str.length === 1 && str.match(/[a,e,i,o,u]/);
}
function isUpperVowel(str) {
  return str.length === 1 && str.match(/[A,E,I,O,U]/);
}
function isLowerConsonant(str) {
  return str.length === 1 && str.match(/[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z]/);
}
function isUpperConsonant(str) {
  return str.length === 1 && str.match(/[B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z]/);
}
function isDigitLetter(str) {
  return str.length === 1 && str.match(/[0-9]/);
}

var seed = 1;

function random() {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function getHashCode(obj) {
  var objString = JSON.stringify(obj);
  var hash = 0, i, chr;
  if (objString.length === 0) return hash;
  for (i = 0; i < objString.length; i++) {
    chr   = objString.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}
