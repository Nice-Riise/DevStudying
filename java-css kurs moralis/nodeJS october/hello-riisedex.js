console.log('Hello, RiiseDeX!');

document.querySelector('.js-container').innerHTML = 'Hey MTF!';

let transactions = [
  
    {
      currency: 'ETH',
      amount: 1
      },
      
     { currency: 'BTC',
      amount: 5.2
      }
      ];
      
 

let clonedTransactions = JSON.parse(JSON.stringify(transactions));
clonedTransactions[1].amount += 0.1;

console.log(transactions);
console.log(clonedTransactions);


