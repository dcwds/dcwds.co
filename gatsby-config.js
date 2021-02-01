module.exports = {
  siteMetadata: {
    title: "Dalton Woods",
    siteUrl: "https://dcwds.co",
    description: "Front-end developer located in Virginia, US.",
  },
  plugins: [
    "gatsby-plugin-preact",
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
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
