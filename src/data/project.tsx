/**
 * Defines the data within a project
 */
interface Project {
    id: string;
    frontmatter: {
        title: string;
        date: string;
        url: string;
        picture: string;
        subtitle: string;
        tags: string[];
        order: number;
    };
}

/**
 * Converts an MDX graphql node into a project
 * @param node the mdx graphql node.
 * @returns A project.
 */
export const convertNodeToProject = (node: any): Project => {
    const project = {
        id: node.id,
        frontmatter: {
            ...node.frontmatter,
            tags: node.frontmatter.tags?.split(",") ?? [],
        },
    };
    return project;
};

export default Project;
