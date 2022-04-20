require('dotenv/config');

const manifestOptions = {
  name: 'The Flavor Page',
  /* eslint-disable camelcase */
  short_name: 'Flavor Page',
  start_url: '/',
  background_color: '#ffffff',
  theme_color: '#663399',
  /* eslint-enable camelcase */
  display: 'minimal-ui',
  icon: 'content/assets/gatsby-icon.png'
};

const gtagOptions = {
  trackingId: process.env.GA_TRACKING_ID,
  head: true,
  anonymize: true
};

const sassOptions = {
  sassOptions: {
    precision: 6
  }
};

module.exports = {
  siteMetadata: {
    title: 'The Flavor Page',
    author: {
      name: 'ayan4m1 <andrew@bulletlogic.com>'
    },
    description: 'Flavor Lists',
    siteUrl: 'https://theflavor.page/'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/content/data`
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-gtag',
      options: gtagOptions
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestOptions
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: sassOptions
    },
    'gatsby-plugin-eslint'
  ]
};
