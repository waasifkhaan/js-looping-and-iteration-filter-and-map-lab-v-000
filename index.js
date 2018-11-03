function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue })
}
// [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
// // => [4, 5]
function driverNamesWithRevenueOver(drivers,revenue){
  return drivers.map(function(driver){
    if(driver.revenue > revenue) {
      return driver.name;
    }
   })
}

function exactMatch(drivers,{key: value}){
  return drivers.map(function(driver){
    if ( driver.key == key && driver[key]== value){
      return driver;
    }
  })
}
