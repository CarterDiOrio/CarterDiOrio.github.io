import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import ProjectsPage from "./projects";

const IndexPage: React.FC<PageProps> = () => {
    return <ProjectsPage />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Carter DiOrio</title>;
