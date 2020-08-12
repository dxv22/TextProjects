// Tax calculator

//NZ tax only for now
const taxCalculator = income => {
    let tax = 0
    switch (true) {
        case (income < 14000) :
            tax = 10.5
            break;
        case (income < 48000) :
            tax = 17.5
            break;
        case (income <= 70000) :
            tax = 30
            break;
        case (income > 70000) :
            tax = 33
            break;
        default : 
            tax = 48
    }
    let totalCost = tax * income
    return `Your tax rate is ${tax}%, and your income of ${income} with tax is ${totalCost}.`
}

console.log(taxCalculator(50000))

