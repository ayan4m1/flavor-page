require('dotenv/config');

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
    'gatsby-transformer-csv',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'The Flavor Page',
        /* eslint-disable camelcase */
        short_name: 'Flavor Page',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        /* eslint-enable camelcase */
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-eslint'
  ]
};
