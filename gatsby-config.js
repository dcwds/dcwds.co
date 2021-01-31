module.exports = {
  siteMetadata: {
    siteUrl: "https://dcwds.co",
    title: "dcwds.co",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://dcwds.co",
        policy: [{ userAgent: "*", disallow: ["/"] }],
      },
    },
  ],
}
