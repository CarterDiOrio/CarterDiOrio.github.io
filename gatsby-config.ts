import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `Portfolio `,
        siteUrl: `https://www.yourdomain.tld`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-theme-ui",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-mdx-embed`,
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {
            //Add the project folder the gatsby data layer.
            //The sourceInstanceName is "projects".
            resolve: "gatsby-source-filesystem",
            options: {
                name: "projects",
                path: "./src/projects/",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "descriptions",
                path: "./src/descriptions/",
            },
        },
        {
            //add images directory to file system
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
    ],
};

// module.exports = {
// 	jsxRuntime: "automatic",
// };

export default config;
