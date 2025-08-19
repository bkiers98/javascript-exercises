const findTheOldest = function(people) {
    for(let person of people) {
        if(!person.yearOfDeath) {
            const thisYear = new Date().getFullYear();
            person.yearOfDeath = thisYear;
        }
        person.age = person.yearOfDeath - person.yearOfBirth;
    }
    people.sort((a, b) => b.age - a.age);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
