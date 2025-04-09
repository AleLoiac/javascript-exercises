const findTheOldest = function(arr) {
    arr.forEach(element => {
        if (!element.yearOfDeath) {
            element.yearOfDeath = new Date().getFullYear();
        }
    });

    console.log(arr);
    
    arr.sort((personA, personB) => (personB.yearOfDeath-personB.yearOfBirth) - (personA.yearOfDeath-personA.yearOfBirth));
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
