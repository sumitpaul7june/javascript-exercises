const findTheOldest = function(persons) {

    const date = new Date();
    return persons.reduce(function(oldest, obj)
{

    let age = (obj.yearOfDeath || date.getFullYear()) - obj.yearOfBirth;
    let oldestAge = (oldest.yearOfDeath || date.getFullYear()) - oldest.yearOfBirth;

   if (age > oldestAge) return obj;
   else return oldest;

})
};

// Do not edit below this line
module.exports = findTheOldest;
