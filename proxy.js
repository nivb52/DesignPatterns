// external API
function CryptoCurrencyApi() {
  this.getValue = (coin) => {
    console.log('calling external Api ...');
    switch (coin) {
      case 'bitcoin':
        return 3500;
      case 'litecoin':
        return 500;
      case 'ethereum':
        return 1500;
      case 'somecoin':
        return 50;
    }
  };
}

const api = new CryptoCurrencyApi();

let res = api.getValue('bitcoin');
console.log(res);
