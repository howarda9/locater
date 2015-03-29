function getDistance(p1, p2) {
  var rad = function(x) {return x * Math.PI / 180;};
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.latitude - p1.latitude);
  var dLong = rad(p2.longitude - p1.longitude);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.latitude)) * Math.cos(rad(p2.latitude)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = Math.round(R * c);
  return d; // returns the distance in meters
}

$(document).ready(function(){
    //Javascript we want to load upon page load
    // caca = [1,2,3,4,5]
    // var pipi = _.reject(caca,function(num){
    //   return num > 3
    // })
    // console.log(caca, pipi)
});
