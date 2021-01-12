module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/blog`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
  ],
};
