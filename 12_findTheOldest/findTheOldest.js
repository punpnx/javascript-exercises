const findTheOldest = function(people) {
    let oldestPerson = people[0]; // ให้คนแรกอายุมากสุด
    let oldestAge = getAge(oldestPerson); // หาอายุคนแรก

    for (let i = 1; i < people.length; i++) { // เริ่มที่คน 2 (index = 1)
        const currentPerson = people[i];
        const currentAge = getAge(currentPerson); // หาอายุคนปจบ.

        // ถ้าคนปจบ.อายุมากกว่าคนแรก >> ให้คนปจบ.เป็นคนอายุมากสุด
        if (currentAge > oldestAge) {
            oldestPerson = currentPerson;
            oldestAge = currentAge;
        }
    } return oldestPerson;
};

function getAge(person) { // หาอายุ
    const currentYear = new Date().getFullYear();
    if (person.yearOfDeath) { // มีข้อมูลปีที่เสีย
      return person.yearOfDeath - person.yearOfBirth;
    } else {
      return currentYear - person.yearOfBirth;
    }
};

// Do not edit below this line
module.exports = findTheOldest;
