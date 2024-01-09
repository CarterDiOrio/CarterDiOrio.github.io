/**
 * Gatsby node for accessing the plugin APIs
 */

const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    //query for all projects mdx files
    const { data } = await graphql(`
        query {
            allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
                nodes {
                    childMdx {
                        id
                        frontmatter {
                            url
                        }
                        internal {
                            contentFilePath
                        }
                    }
                }
            }
        }
    `);

    //turn each project mdx file into a page
    projectComponent = require.resolve("./src/templates/project.tsx");
    mdxNodes = data.allFile.nodes.map((node) => node.childMdx);
    mdxNodes.forEach((node) => {
        createPage({
            path: `/projects/${node.frontmatter.url}`,
            component: `${projectComponent}?__contentFilePath=${node.internal.contentFilePath}`,
            context: { id: node.id },
        });
    });
};
