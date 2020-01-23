const reverseString = function(strIn) {
  let reversedString = '';
  for(let count = 0; count < strIn.length; count++){
    reversedString += strIn[strIn.length-1-count];
  }
  return reversedString;
}

module.exports = reverseString
