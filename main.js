// https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5;

fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
  .then(value => {
    return value.json();
  })
  .then(value => {
    console.log(value);

    value.forEach(({ base_ccy, buy, ccy, sale }) => {
      document.write(`${base_ccy}, ${buy}, ${ccy}, ${sale}`);
      document.write(`<br>`);

    })
  });



