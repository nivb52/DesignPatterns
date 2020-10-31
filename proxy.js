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

let res;

// ====================OLD WAY========================================
const api = new CryptoCurrencyApi();
res = api.getValue('bitcoin');
// console.info(res);

// ====================NEW WAY========================================
// adding the proxy pattern
function CryptoCurrencyProxyPattern() {
  this.api = new CryptoCurrencyApi();

  this.cache = new Map();

  this.getValue = (coin) => {
    if (this.cache.get(coin)) return this.cache.get(coin);
    else {
      let value = api.getValue(coin);
      this.cache.set(coin, value);
      console.log('cache ... ', this.cache);
      return value;
    }
  };
}

const proxy_api = new CryptoCurrencyProxyPattern();

res = proxy_api.getValue('bitcoin');
console.log(res);
res = proxy_api.getValue('litecoin');
console.log(res);
res = proxy_api.getValue('ethereum');
console.log(res);
res = proxy_api.getValue('somecoin');
console.log(res);
res = proxy_api.getValue('bitcoin');
console.log(res);
