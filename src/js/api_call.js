import dotenv from 'dotenv';
dotenv.config();

export default class CurrencyService {
  constructor() {
    this.apiKey = process.env.API_KEY;
    this.exchangeRates = null;
  }

  getExchangeRates() {
    const url = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/USD`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .then(data => {
        console.log(data);
        this.exchangeRates = data;
        return data;
      })
      .catch(error => {
        throw error;
      });
  }
}

const currencyService = new CurrencyService();
currencyService.getExchangeRates();
