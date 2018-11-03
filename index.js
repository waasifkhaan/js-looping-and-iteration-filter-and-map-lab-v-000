function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue })
}
[1, 2, 3, 4, 5].filter(function (num) { return num > 3; });
// => [4, 5]