require('dotenv/config');

module.exports = {
  siteMetadata: {
    title: 'flavor-page',
    author: {
      name: 'ayan4m1 <andrew@bulletlogic.com>'
    },
    description: 'Flavor Lists',
    siteUrl: 'https://theflavor.page/'
  },
  plugins: [
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
