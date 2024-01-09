/**
 * Hook to query for the featured projects
 */

import { useStaticQuery, graphql } from "gatsby";
import Project, { convertNodeToProject } from "../data/project";
import Description from "../data/description";

const useFeaturedProject = (): {
    project: Project;
    description: Description;
} => {
    //query for featured project
    const data = useStaticQuery(graphql`
        {
            mdx(frontmatter: { featured: { eq: true } }) {
                id
                frontmatter {
                    title
                    date(formatString: "MMMM D, YYYY")
                    url
                    picture
                    subtitle
                    tags
                }
            }
            allFile(filter: { sourceInstanceName: { eq: "descriptions" } }) {
                nodes {
                    childMarkdownRemark {
                        frontmatter {
                            project
                        }
                        html
                    }
                }
            }
        }
    `);

    const project: Project = convertNodeToProject(data.mdx);

    //find the featured project
    const descriptionNode = data.allFile.nodes.find(
        (node: any) =>
            node.childMarkdownRemark.frontmatter.project ==
            project.frontmatter.title
    ).childMarkdownRemark;

    //assemble description object
    const description: Description = {
        html: descriptionNode.html,
        ...descriptionNode.frontmatter,
    };

    return { project: project, description: description };
};

export default useFeaturedProject;
