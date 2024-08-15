const host = 'api.frankfurter.app';
fetch(`https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD`)
  .then(resp => resp.json())
  .then((data) => {
    alert(`10 GBP = ${data.rates.USD} USD`);
  });