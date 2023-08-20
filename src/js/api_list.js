export default class CurrencyDropdown {
    constructor(data) {
      this.data = data;
    }
  
    createCurrencyDropdown() {
      const conversionRates = this.data.conversion_rates;
      const select = document.createElement('select');
      select.id = 'currency-select';
  
      for (const currency in conversionRates) {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        select.appendChild(option);
      }
  
      document.body.appendChild(select);
    }
  }
  
  