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
        {name: 'description', content: 'Tells you whether your favorite movie is good or bad.'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'},
        {name: 'apple-mobile-web-app-capable', content: 'yes'},
        {name: 'apple-mobile-web-app-status-bar-style', content: '#2C3E50'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Movie Critic'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Movie Critic'},
        {property: 'og:description', content: 'Tells you whether your favorite movie is good or bad.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@gregsabo'},
        {property: 'og:creator', content: '@gregsabo'},
        {property: 'og:title', content: 'Tells you whether your favorite movie is good or bad.'},
        {property: 'og:description', content: 'Tells you whether your favorite movie is good or bad.'},
        {property: 'og:image', content: 'https://beanstalk-movie-critic.herokuapp.com/apple-touch-icon.png'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'},
      ],
      link: [
        {'rel': 'apple-touch-startup-image', 'href': '/startup.png'}
      ],
    }
  },

}, environment);
