function isNumber(valueIn){
  let regex = /^[0-9]+$/; //regex pattern for integers
  if (!regex.exec(valueIn)) {
    return false;
  } else {
    return true;
  }
}

const sumAll = function(num1, num2) {
  let sum = 0;
  let bigNum = 0;
  let littleNum = 0;

  if(num1 < 0 || num2 < 0){
    return 'ERROR';
  } else if(!(Number.isInteger(num1)) || (!Number.isInteger(num2))){
    return 'ERROR';
  }

  if(num1 < num2){
    littleNum = num1;
    bigNum = num2;
  } else {
    littleNum = num2;
    bigNum = num1;
  }
  for(let count = littleNum; count <= bigNum; count++){
    sum += count;
  }
  return sum;
}

module.exports = sumAll
