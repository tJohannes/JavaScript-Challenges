function time_conversion(minutes) {
  var min = (minutes % 60)
  return Math.floor(minutes / 60) + ":" + (( min > 9) ? min : "0" + min)
}
console.log("04. ", time_conversion(150))
