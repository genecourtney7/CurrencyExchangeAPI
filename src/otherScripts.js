//business logic
class ExchangeRateAPI {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.endpoint = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/USD`;
    }
  
    async getRates() {
      const response = await fetch(this.endpoint);
      const data = await response.json();
      return data;
    }
  }
  
  const exchangeRateAPI = new ExchangeRateAPI('process.env.API_key');
  exchangeRateAPI.getRates().then(data => {
    console.log(data);
  });
  
