// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, e){
    return drivers.filter((driver) => driver.startsWith(e))
}

function matchName(drivers, name){
    return drivers.filter((driver) => driver.name === name)

}