require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Movie Critic',
    description: 'All the modern best practices in one example.',
    head: {
      titleTemplate: 'Movie Critic: %s',
      meta: [
        {name: 'description', content: 'All the modern best practices in one example.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Movie Critic'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Movie Critic'},
        {property: 'og:description', content: 'A starting point for new apps.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@gregsabo'},
        {property: 'og:creator', content: '@gregsabo'},
        {property: 'og:title', content: 'A starting point for new apps.'},
        {property: 'og:description', content: 'A starting point for new apps.'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
