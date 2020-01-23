function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = function(tempFrht) {
  let tempCels = (tempFrht - 32) * (5/9);
  return round(tempCels, 1);
}

const ctof = function(tempCels) {
  let tempFrht = (tempCels * (9/5)) + 32;
  return round(tempFrht, 1);
}

module.exports = {
  ftoc,
  ctof
}
