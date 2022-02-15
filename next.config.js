const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const dotenv = require('dotenv');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  env: {
    spoonKey: process.env.SPOONACULAR_API_KEY,
    baseApiUrl: process.env.BACKEND_URL
  }
})
