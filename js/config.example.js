// Copy this file to config.js and add your local payment credentials.
const CONFIG = {
  PAYMENT_API_KEY: '',
  PAYMENT_URL: 'https://payments.example.com/v1'
};

if (typeof module !== 'undefined') {
  module.exports = CONFIG;
}