const removeFromArray = function(arrIn) {
  for(let count = 1; count < arguments.length; count++){
    for(let element = 0; element < arrIn.length; element++){
      if(arrIn[element] === arguments[count]){
        arrIn.splice(element, 1);
      }
    }
  }
  return arrIn;
}

module.exports = removeFromArray
