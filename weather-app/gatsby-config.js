/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Weather App for the masses`,
    description: `Nathan is taking too much time cooking`,
    siteUrl: `https://www.yourdomain.tld`
  },
  
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-google-gtag", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  //https://www.npmjs.com/package/gatsby-source-multi-api
  {
    resolve: 'gatsby-source-multi-api',
    options: {
      "name": "testQ",
      apis: [
        {
          //multiApi
          endpoints: ["42,-71","100,10"],
          baseUrl: "https://api.weather.gov/points/",
          method: "OPTIONS",
        },
      ],
    },
  }
]
};