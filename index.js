// Code your solution here

// function filter (collection, cb) {
//     for (const user of collection) {
//       if (cb(user)) {
//         console.log(user.firstName);
//       }
//     }
//  }
  
function findMatching(driverArr, nameString) {
    const filterArr = driverArr.filter(driverName => driverName.toLowerCase() === nameString.toLowerCase())
    return filterArr
}

function fuzzyMatch(driverArr, argString) {
    const filterArr = driverArr.filter(driverName => driverName.startsWith(argString))
    return filterArr
}

function matchName(driverArr, argString) {
    const filterArr = driverArr.filter(driver => driver.name === argString)
    return filterArr
}