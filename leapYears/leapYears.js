const leapYears = function(year) {
  let divBy4 = (year%4 === 0);
  let divBy100 = (year%100 === 0);
  let divBy400 = (year%400 === 0);
  if(divBy4 && !divBy100 || divBy400){
    return true;
  } else {
    return false;
  }
}

module.exports = leapYears
