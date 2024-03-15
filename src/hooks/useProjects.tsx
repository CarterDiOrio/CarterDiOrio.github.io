/**
 * Hook to query all of the projects from the gatsby data layer
 */

import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import Project, { convertNodeToProject } from "../data/project";

const useProjects = (): Project[] => {
    const data = useStaticQuery(graphql`
        {
            allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
                nodes {
                    childMdx {
                        id
                        frontmatter {
                            title
                            date(formatString: "MMMM D, YYYY")
                            url
                            picture
                            subtitle
                            tags
                            order
                        }
                    }
                }
            }
        }
    `);

    const projects = data.allFile.nodes.map((node: any) =>
        convertNodeToProject(node.childMdx)
    );

    return projects;
};

export default useProjects;
