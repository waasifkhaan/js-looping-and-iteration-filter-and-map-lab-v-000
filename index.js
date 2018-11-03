function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue })
}
// [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
// // => [4, 5]
function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in driver) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}
