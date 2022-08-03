const input = require('sync-input');

let currencies = {
    usd: 1,
    jpy: 113.5,
    eur: 0.89,
    rub: 74.36,
    gbp: 0.75
}

console.log("Welcome to Currency Converter!");
console.log(`1 USD equals ${currencies.usd} USD`);
console.log(`1 USD equals ${currencies.jpy} JPY`);
console.log(`1 USD equals ${currencies.eur} EUR`);
console.log(`1 USD equals ${currencies.rub} RUB`);
console.log(`1 USD equals ${currencies.gbp} GBP`);

console.log("What do you want to do?");
console.log("1-Convert currencies 2-Exit program");
let choice;
do {
    choice = Number(input());
    switch (choice) {
        case 1:
            console.log("What do you want to convert?");
            let fromCurrency = input("From: ").toUpperCase();
            let fromValue;
            switch (fromCurrency) {
                case "USD":
                    fromValue = currencies.usd;
                    break;
                case "JPY":
                    fromValue = currencies.jpy;
                    break;
                case "EUR":
                    fromValue = currencies.eur;
                    break;
                case "RUB":
                    fromValue = currencies.rub;
                    break;
                case "GBP":
                    fromValue = currencies.gbp;
                    break;
                default:
                    fromValue = null;
                    console.log("Unknown currency");
            }
            if (fromValue !== null) {
                let toCurrency = input("To: ").toUpperCase();
                let toValue;
                switch (toCurrency) {
                    case "USD":
                        toValue = currencies.usd;
                        break;
                    case "JPY":
                        toValue = currencies.jpy;
                        break;
                    case "EUR":
                        toValue = currencies.eur;
                        break;
                    case "RUB":
                        toValue = currencies.rub;
                        break;
                    case "GBP":
                        toValue = currencies.gbp;
                        break;
                    default:
                        toValue = null;
                        console.log("Unknown currency");
                }
                if (toValue !== null) {
                    let amount = Number(input("Amount: "));
                    if (isNaN(amount)) {
                        console.log("The amount has to be a number");
                    } else if (amount < 1) {
                        console.log("The amount cannot be less than 1");
                    } else {
                        let result = amount * toValue / fromValue;
                        console.log(`Result: ${amount} ${fromCurrency} equals ${result.toFixed(4)} ${toCurrency}`);
                    }
                }
            }
            break;
        case 2:
            console.log("Have a nice day!");
            break;
        default:
            console.log("Unknown input");
            break;
    }
} while (choice !== 2);