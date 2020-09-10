let numbers = [3, 5, 7, 6, 41];

console.log(numbers)

// Få en array som svar/resultat
let topNumbers = numbers.filter(function (number) {
    return number > 9
})

console.log(topNumbers);


// Ger true/false som resultat
let isNumbersOdd = numbers.some(number => {
    return number % 2 == 1;
})

// Går igenom alla element och utför det du vill.
let biggerNumbers = numbers.map(number => {
    if (number % 2 == 0) {
        return number * 2;
    } else {
        return number
    }
})

console.log(biggerNumbers)

// Sökningar

let users = [{
        name: "Hans",
        age: 2
    },
    {
        name: "Ola"
    }
]

let idx = users.findIndex(function (user) {
    return user.name == "Ola"
});