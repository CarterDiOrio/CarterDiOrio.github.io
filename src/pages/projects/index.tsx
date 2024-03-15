/** @jsxImportSource theme-ui */

import * as React from "react";
import Layout from "../../components/layout";
import useProjects from "../../hooks/useProjects";
import useFeaturedProject from "../../hooks/useFeaturedProject";
import FeaturedProjectCard from "../../components/featured-card";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Box, Divider, Heading } from "theme-ui";

const ProjectsPage = () => {
    const projects = useProjects();
    const sorted_projects = projects.sort((a, b) => {
        return a.frontmatter.order - b.frontmatter.order;
    });
    const featuredProject = useFeaturedProject();

    return (
        <Layout>
            <Box>
                <FeaturedProjectCard
                    project={featuredProject.project}
                    description={featuredProject.description}
                    featured={true}
                />
            </Box>
            <Divider />
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 500: 1, 900: 2, 1600: 3 }}
            >
                <Masonry gutter="16px">
                    {sorted_projects
                        .filter(
                            // Ignore the featured project, don't want to list it twice
                            (project) =>
                                project.id != featuredProject.project.id
                        )
                        .map((project) => (
                            <FeaturedProjectCard
                                key={project.id}
                                project={project}
                                featured={false}
                            />
                        ))}
                </Masonry>
            </ResponsiveMasonry>
        </Layout>
    );
};

export const Head = () => <title>Projects</title>;

export default ProjectsPage;
