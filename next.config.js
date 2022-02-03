const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const dotenv = require('dotenv');

// to make .env work


module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  publicRuntimeConfig: {
    APIKEY: process.env.NEXT_PUBLIC_SPOONACULAR_API
  }
})
