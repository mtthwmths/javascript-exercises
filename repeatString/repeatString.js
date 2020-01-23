const repeatString = function(strIn, repeat) {

 let repeatedString = '';

 if(repeat < 0) {
   return 'ERROR';
 }

 for(let count = 0; count < repeat; count++){
   repeatedString += strIn;
 }

  return repeatedString;
}

module.exports = repeatString
