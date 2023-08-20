import CurrencyService from './js/api_call.js';
import CurrencyDropdown from './js/api_list.js';

const currencyDropdown = new CurrencyDropdown();
currencyDropdown.createCurrencyDropdown(); 
const currencyService = new CurrencyService('process.env.API_KEY');
let exchangeRates;

async function getExchangeRates() {
  exchangeRates = await currencyService.getExchangeRates();
  const currencies = Object.keys(exchangeRates.conversion_rates);
  const currencySelect = document.getElementById('currency-select');
  currencies.forEach(currency => {
    const option = document.createElement('option');
    option.value = currency;
    option.text = currency;
    currencySelect.add(option);
  });
}

function convertAmount() {
  const amountInput = document.getElementById('amount-input');
  const currencySelect = document.getElementById('currency-select');
  const resultText = document.getElementById('result-text');
  const amount = parseFloat(amountInput.value);  const currency = currencySelect.value;
  const conversionRate = exchangeRates.conversion_rates[currency];
  const result = amount * conversionRate;
  resultText.textContent = `${amount} USD is equal to ${result.toFixed(2)} ${currency}`;
}

window.addEventListener('load', () => {
  getExchangeRates();
  const convertButton = document.getElementById('convert-button');
  convertButton.addEventListener('click', convertAmount);
});
